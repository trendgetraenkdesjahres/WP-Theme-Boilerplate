let ciao = wp.blocks.getBlockType('test/ciao');
ciao.edit = function ({ attributes, isSelected }) {
    const blockProps = wp.blockEditor.useBlockProps();

    let content = attributes.content
    var res = '';
    for (const key in blockProps) {
        if (typeof blockProps[key] === 'string') {
            res += key + "='" + blockProps[key] + "' ";
        }
    }
    return "<div " + res + ">" + content + "</div>" + (
        isSelected ? "<span>Shows only when the block is selected.</span>" : ""
    );
};
wp.blocks.unregisterBlockType('test/ciao');
wp.blocks.registerBlockType('test/ciao', ciao);

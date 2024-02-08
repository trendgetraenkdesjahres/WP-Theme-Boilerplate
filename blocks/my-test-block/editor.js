const thisBlock = wp.blocks.getBlockType('test/my-test-block');
thisBlock.edit = function ({ attributes, isSelected }) {
    console.log(attributes);
    console.log("/wp/v2/block-renderer/" + thisBlock.name);
    wp.apiFetch({
        path: "/wp/v2/block-renderer/" + thisBlock.name,
        data: {
            attributes: attributes,
        },
    }).then((posts) => {
        console.log(posts);
    }).catch(
        (error) => {
            if (error.name === 'AbortError') {
                console.log('Request has been aborted');
            }
        });
}
wp.blocks.unregisterBlockType('test/my-test-block');
wp.blocks.registerBlockType('test/my-test-block', thisBlock);

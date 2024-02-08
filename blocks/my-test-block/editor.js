const { useState, useEffect } = React;
const { registerBlockType } = wp.blocks;
const { createElement } = wp.element;

const thisBlock = wp.blocks.getBlockType('test/my-test-block');

thisBlock.edit = (attributes, isSelected) => {
    const [renderedContent, setRenderedContent] = useState(null);
    attributes.context = 'edit';
    useEffect(() => {
        // Your asynchronous operation using wp.apiFetch
        wp.apiFetch({
            path: "/wp/v2/block-renderer/" + thisBlock.name,
            method: 'POST',
            data: attributes
        })
            .then((result) => {
                console.log('Success!', result);
                setRenderedContent(result.rendered);
            })
            .catch((error) => {
                console.error('Error:', error);
                // Set a default value or handle the error in another way
                setRenderedContent('Default value');
            });
    }, []); // Empty dependency array to run the effect only once on mount

    return (createElement(renderedContent));
}
wp.blocks.unregisterBlockType('test/my-test-block');
wp.blocks.registerBlockType('test/my-test-block', thisBlock);
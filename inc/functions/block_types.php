<?php

/* disable any but them */
/* add_filter('allowed_block_types_all', function ($allowed_block_types, $editor_context) {
    $enabled_blocks =
        [
            "core/heading",
            "core/paragraph" => 'post',
            "core/table" => ['post', 'page']
        ];
    foreach ($enabled_blocks as $block_name => $post_type) {
        if (!(new WP_Block_Type_Registry)->is_registered($block_name)) {
            return new \WP_Error("$block_name is not a registred block");
        }
        if (is_string($post_type)) {
            if ($editor_context->post->post_type !== $post_type) {
                unset($enabled_blocks[$block_name]);
            }
        }
        if (is_array($post_type)) {
            if (!in_array($editor_context->post->post_type, $post_type)) {
                unset($enabled_blocks[$block_name]);
            }
        }
    }
    return $enabled_blocks;
}, null, 2);

add_filter('allowed_block_types_all', 'misha_allowed_block_types', 25, 2);

function misha_allowed_block_types($allowed_blocks, $editor_context)
{

    $allowed_blocks = array(
        'core/image',
        'core/paragraph',
        'core/heading',
        'core/list',
        'core/list-item'
    );

    if ('page' === $editor_context->post->post_type) {
        $allowed_blocks[] = 'core/shortcode';
    }

    return $allowed_blocks;
}
 */

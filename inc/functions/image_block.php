<?php

add_filter('render_block', function (string $block_content, array $block, WP_Block $instance) {
    return $block_content;
}, 10, 3);

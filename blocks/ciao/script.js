import Edit from './edit.js';

const { registerBlockType } = wp.blocks;
console.log('hallo');
registerBlockType( 'test/ciao', {
    edit: Edit,
} );

//?TODO: remove this deprecated import
import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';
import './style.scss';


/**
* deprecated added since v1.4.1 to support backward compatibility
* @see src/blocks/list/deprecated/versions/v1.js'
*/

const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata, {
    // icon: {
    //     src: BlockIcons['list'],
    // },
    attributes,
    edit: Edit,
    save: Save,
});

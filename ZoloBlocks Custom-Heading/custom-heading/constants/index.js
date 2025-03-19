/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'custom-heading';
// Presets
export const PRESETS = [
    { label: __('H1', 'zoloblocks'), value: 'zolo-custom-heading-1' },
    { label: __('H2', 'zoloblocks'), value: 'zolo-custom-heading-2' },
    { label: __('H3', 'zoloblocks'), value: 'zolo-custom-heading-3' },
    { label: __('H4', 'zoloblocks'), value: 'zolo-custom-heading-4' },
    { label: __('H5', 'zoloblocks'), value: 'zolo-custom-heading-5' },
    { label: __('H6', 'zoloblocks'), value: 'zolo-custom-heading-6' },
];

export const HEADING_TEXT_STROKE = 'headingTextStroke';
export const HEADING_TEXT_SHADOW = 'headingTextShadow';
const {
    generateTypographyAttributes,
    generateTextStrokeAttributies,
    generateTextShadowAttributies
} = window.zoloModule;

import * as typographyObjs from './constants/typoPrefixConstant';

import { HEADING_TEXT_STROKE, HEADING_TEXT_SHADOW } from './constants';

const attributes = {
    //Global Attributes
    globalConfig: {
        type: 'object',
        default: {
            margin: {
                prefix: 'mainMargin',
            },
            padding: {
                prefix: 'mainPadding',
            },
            background: {
                prefix: 'mainBg',
            },
            border: {
                prefix: 'mainBorder',
            },
            borderRadius: {
                prefix: 'mainBorderRadius',
            },
            boxShadow: {
                prefix: 'mainBoxShadow',
            },
            responsiveControls: true,
        },
    },

    //typography
    ...generateTypographyAttributes(Object.values(typographyObjs)),
    // headingtextstroke
    ...generateTextStrokeAttributies(HEADING_TEXT_STROKE),
    // headingtextshadow 
    ...generateTextShadowAttributies(HEADING_TEXT_SHADOW),

    //Heading Color Attributes
    headingColor: {
        type: 'string',
    },
    //Heading Attributes
    heading: {
        type: 'string',
        default: 'h1',
    },
    //Heading Text Attributes
    headingText: {
        type: 'string',
        default: 'Hello World',
    },
    // Heading Type Attributes
    preset: {
        type: 'string',
        default: 'zolo-custom-heading-1',
    },
};

export default attributes;

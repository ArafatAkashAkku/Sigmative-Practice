/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const { generateTypographyStyles, GlobalStyleHanlder, generateTextStrokeStyles, generateTextShadowStyles } = window.zoloModule;

import {} from './constants';

import { CUSTOM_HEADING_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { applyFilters } from '@wordpress/hooks';

import {HEADING_TEXT_STROKE, HEADING_TEXT_SHADOW} from './constants';

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const { heading, headingColor, preset, uniqueId } = attributes;

    //desc
    const {
        typoStylesDesktop: DesktopTextListTypo,
        typoStylesTab: TabTextListTypo,
        typoStylesMobile: MobTextListTypo,
    } = generateTypographyStyles({ prefixConstant: CUSTOM_HEADING_TYPOGRAPHY, attributes });

    const {
        desktopTextStrokeStyle: DesktopTextStrokeTypo,
        tabTextStrokeStyle: TabTextStrokeTypo,
        mobTextStrokeStyle: MobTextStrokeTypo,
    } = generateTextStrokeStyles({ controlName: HEADING_TEXT_STROKE, attributes });

    const { textShadowStyle: titleTextShadowStyle } = generateTextShadowStyles({
        attributes,
        controlName: HEADING_TEXT_SHADOW,
    });

    /**
     * All Style Combination
     */
    const desktopAllStyle = `


 .${uniqueId} .zolo-heading-text.${heading} {
     ${DesktopTextListTypo}
     ${titleTextShadowStyle}
     ${DesktopTextStrokeTypo}
    color:${headingColor}
    }

  	`;
    const tabletAllStyle = `
  
  		
	`;

    const mobileAllStyle = `
  
  	`;
    return (
        <>
            <GlobalStyleHanlder
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyle={applyFilters('zolo.list.desktopAllStyle', desktopAllStyle, props)}
                tabAllStyle={applyFilters('zolo.list.tabletAllStyle', tabletAllStyle, props)}
                mobileAllStyle={applyFilters('zolo.list.mobileAllStyle', mobileAllStyle, props)}
            />
        </>
    );
};
export default Style;

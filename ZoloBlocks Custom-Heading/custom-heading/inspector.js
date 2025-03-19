/**
 * Internal depencencies
 */
const { HeaderTabs, AdvancedOptions, ZoloPanelBody, ColorControl, TypographyDropdown, TextShadowControl, TextStrokeControl, ResAlignmentControl } = window.zoloModule;

/**
 * WordPress depencencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';

import { PRESETS, HEADING_TEXT_STROKE, HEADING_TEXT_SHADOW, HEADING_TEXT_ALIGN } from './constants';
import { CUSTOM_HEADING_TYPOGRAPHY } from './constants/typoPrefixConstant';

import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { preset, heading, headingColor, resMode } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    /**
     * Preset
     */
    const changePremade = (selected) => {
        setAttributes({ preset: selected });
        switch (selected) {
            case 'zolo-custom-heading-1':
                setAttributes({ heading: 'h1' });
                break;
            case 'zolo-custom-heading-2':
                setAttributes({ heading: 'h2' });
                break;
            case 'zolo-custom-heading-3':
                setAttributes({ heading: 'h3' });
                break;
            case 'zolo-custom-heading-4':
                setAttributes({ heading: 'h4' });
                break;
            case 'zolo-custom-heading-5':
                setAttributes({ heading: 'h5' });
                break;
            case 'zolo-custom-heading-6':
                setAttributes({ heading: 'h6' });
                break;
            default:
                setAttributes({ heading: 'h1' });
                break;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/custom-heading"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Heading', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.custom-heading.presets', PRESETS)}
                                onChange={(value) => changePremade(value)}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Heading Color', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={headingColor}
                                onChange={(value) =>
                                    setAttributes({
                                        headingColor: value,
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Heading Font', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={CUSTOM_HEADING_TYPOGRAPHY}
                                requiredProps={requiredProps}
                                max={36}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Heading Stroke', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <TextStrokeControl
                                label={__('Stroke', 'zoloblocks')}
                                controlName={HEADING_TEXT_STROKE}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Heading Shadow', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <TextShadowControl
                                label={__('Stroke', 'zoloblocks')}
                                controlName={HEADING_TEXT_SHADOW}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody> 
                        <ZoloPanelBody title={__('Heading Align', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <ResAlignmentControl
                                label={__('Align', 'zoloblocks')}
                                controlName={HEADING_TEXT_ALIGN}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody> 
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/custom-heading"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;

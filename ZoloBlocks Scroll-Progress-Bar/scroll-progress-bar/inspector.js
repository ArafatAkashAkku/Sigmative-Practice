/**
 * Internal depencencies
 */
const { HeaderTabs, ZoloPanelBody } = window.zoloModule;

/**
 * WordPress depencencies
 */
import { ColorPalette, InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { scrollProgressBarColor } = attributes;

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/scroll-progress-bar"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={<></>}
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Scroll Progress Bar Color', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ColorPalette
                                label={__('Scroll Progress Bar Color', 'zoloblocks')}
                                value={scrollProgressBarColor}
                                onChange={(value) => setAttributes({ scrollProgressBarColor: value })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={<></>}
            />
        </InspectorControls>
    );
}

export default Inspector;

/**
 * WordPress dependencies
 */

import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */

import Inspector from './inspector';
import classnames from 'classnames';
const { classArrayToStr, SidebarOpener } = window.zoloModule;
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, clientId, className } = props;
    const { heading, headingText, uniqueId, parentClasses, preset } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className,`${uniqueId}`, classArrayToStr(parentClasses), preset),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <RichText
                    className={`zolo-heading-text ${heading}`}
                    tagName={heading}
                    value={headingText}
                    onChange={(value) => setAttributes({ headingText: value })}
                    placeholder={__('Heading Text', 'zolo-blocks')}
                />
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}

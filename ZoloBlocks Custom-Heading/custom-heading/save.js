/**
 * Internal depencencies
 */
const { classArrayToStr } = window.zoloModule;

import classnames from 'classnames';

import { RichText, useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, preset, zoloId, heading, headingText } = attributes;
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, classArrayToStr(parentClasses),preset),
            })}
            // {...(zoloId && {
            //     id: zoloId,
            // })}
        >
            {renderHookBefore && renderHookBefore}
            <RichText.Content  className={`zolo-heading-text ${heading}`} tagName={heading} value={headingText} />
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;

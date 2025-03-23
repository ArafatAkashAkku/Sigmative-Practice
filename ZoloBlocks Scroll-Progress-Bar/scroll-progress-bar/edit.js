/**
 * WordPress dependencies
 */

import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */

import Inspector from './inspector';
import classnames from 'classnames';
const { classArrayToStr, SidebarOpener } = window.zoloModule;

const Edit = (props) => {
    const { attributes, setAttributes, isSelected, clientId, className } = props;
    const { scrollProgressBarColor, uniqueId, parentClasses } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <div
                    id="scroll-progress-bar"
                    style={{
                        // position: 'fixed',
                        // top: '0',
                        // left: '0',
                        width: '50%',
                        height: '10px',
                        background: scrollProgressBarColor,
                        zIndex: '9999',
                        transition: 'width 0.3s ease-in-out',
                    }}
                />
                <div>Scroll Progress Bar Check</div>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
};

export default Edit;

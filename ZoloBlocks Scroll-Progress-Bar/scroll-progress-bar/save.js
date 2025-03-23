const { classArrayToStr } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, scrollProgressBarColor } = attributes;
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, classArrayToStr(parentClasses)),
            })}

            
        >
            {renderHookBefore && renderHookBefore}
            <div
                id="scroll-progress-bar"
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '0%',
                    height: '10px',
                    background: scrollProgressBarColor,
                    zIndex: '9999',
                    transition: 'width 0.3s ease-in-out',
                }}
            />
            <script>
                {`
                document.addEventListener("scroll", function() {
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollPercent = (scrollTop / docHeight) * 100;
                    document.getElementById("scroll-progress-bar").style.width = scrollPercent + "%";
                });
                `}
            </script>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;

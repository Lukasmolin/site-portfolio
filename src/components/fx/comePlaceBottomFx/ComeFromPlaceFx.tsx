import React, { useState } from 'react';

export default function ComeFromPlaceFx(props: { children: JSX.Element, from: 'up' | 'down' | 'left' | 'right', allowMoveUp?: boolean, transitionTime?: number, distance?: string }): React.ReactElement {
    const { children, allowMoveUp, transitionTime, distance } = props;
    const [isFxActive, setFxActive] = useState(true);
    if (allowMoveUp && isFxActive)
        setFxActive(false);

    const from = getMarginTransition();
    function getMarginTransition() {
        const { from } = props;
        switch (from) {
            case 'up': return 'padding-bottom';
            case 'down': return 'padding-top';
            case 'left': return 'padding-right';
            case 'right': return 'padding-left';
        }
    }
    function getPushedCSSKey() {
        const { from } = props;
        switch (from) {
            case 'up': return 'paddingBottom';
            case 'down': return 'paddingTop';
            case 'left': return 'paddingRight';
            case 'right': return 'paddingLeft';
        }
    }
    const pushedDownCSS: React.CSSProperties = {};
    pushedDownCSS[getPushedCSSKey()] = distance || '20px';

    const transitionTimeVar: React.CSSProperties = {
        transition: `${from} ${transitionTime || 0}s`,
        minWidth: 'min-content'
    };
    const style = isFxActive ? pushedDownCSS : {};
    return <div style={{ ...style, ...transitionTimeVar }} className='comeFromBottomFx'>{children}</div>;
}
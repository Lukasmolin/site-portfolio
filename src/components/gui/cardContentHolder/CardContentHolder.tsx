import React from 'react';
import './CardContentHolder.css'

export interface CardStyle {
    cardDetailColor?: string;
    cardShadowDefault?: string;
    cardBackgroundColor?: string;
    cardShadowOnHoverColor?: string
}


export default function CardContentHolder(props: { children: React.ReactNode, style?: CardStyle, className?: string }): React.ReactElement {
    const { children, style, className } = props;
    const styleObj = {
        '--card-detail-color': style?.cardDetailColor,
        '--card-shadow-default': style?.cardShadowDefault,
        '--card-background-color': style?.cardBackgroundColor,
        '--card-shadow-on-hover': style?.cardShadowOnHoverColor,
    };
    const appendClassname = className ? ' ' + className : '';
    return <div style={styleObj as React.CSSProperties} className={'card' + appendClassname}>
        {children}
    </div>;
};
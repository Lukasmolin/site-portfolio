import React from 'react';
import './CardContentHolder.css'

export interface CardStyle {
    cardDetailColor?: string;
    cardShadowDefault?: string;
    cardBackgroundColor?: string;
    cardShadowOnHoverColor?: string
}


export default function CardContentHolder(props: { children: React.ReactNode, style?: CardStyle }): React.ReactElement {
    const { children, style } = props;
    let styleObj = {
        '--card-detail-color' : style?.cardDetailColor,
        '--card-shadow-default' : style?.cardShadowDefault,
        '--card-background-color' : style?.cardBackgroundColor,
        '--card-shadow-on-hover' : style?.cardShadowOnHoverColor,
    };

    return <div style={styleObj as React.CSSProperties} className={'card'}>
        {children}
    </div>;
};
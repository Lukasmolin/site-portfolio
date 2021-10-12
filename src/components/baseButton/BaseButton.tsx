import React from 'react';
import SVGImage from '../SVGElement/SVGImage';
import './BaseButton.css';
import './ButtonIcon.css';

export default function BaseButton(props: { text: string, href?: string, className?: string, svgIconPath?: string }): React.ReactElement {
    const { text, href, className, svgIconPath } = props;
    const toAppendClass = className ? ' ' + className : '';

    return <div className={'button' + toAppendClass}>
        <a href={href}>
            {text}
        </a>
        {svgIconPath && SVGImage(svgIconPath)}
    </div>;
}
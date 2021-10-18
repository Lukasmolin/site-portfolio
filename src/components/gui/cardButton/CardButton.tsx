import React from 'react';
import BaseButton from '../baseButton/BaseButton';
import './CardButton.css';

export default function CardButton(props: { text: string, href: string, svgIconPath: string }): React.ReactElement {
    const { href, svgIconPath, text } = props;
    return <BaseButton
        className='cardButton'
        href={href}
        svgIconPath={svgIconPath}
        text={text}
    ></BaseButton>;
}
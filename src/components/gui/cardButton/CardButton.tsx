import React from 'react';
import BaseButton from '../baseButton/BaseButton';
import './CardButton.css';

export default function CardButton(props: { label: string, href: string, iconName?: string }): React.ReactElement {
    const { href, iconName, label } = props;
    return <BaseButton
        className='cardButton'
        href={href}
        svgIconPath={iconName}
        text={label}
    ></BaseButton>;
}
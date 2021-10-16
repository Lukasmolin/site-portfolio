import React from 'react';
import BaseButton from '../baseButton/BaseButton';
import './HeaderButton.css';

export interface HeaderButtonData { 
    text: string,
    href: string
}

export default function HeaderButton(props: HeaderButtonData) {
    const { text, href } = props;
    return <BaseButton href={href} className='headerButton' text={text}></BaseButton>
}
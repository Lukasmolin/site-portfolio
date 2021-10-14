import React from 'react';
import BaseButton from '../baseButton/BaseButton';
import './HeaderButton.css';

export interface HeaderButtonProps { 
    text: string,
    href: string
}

export default function HeaderButton(props: HeaderButtonProps) {
    const { text, href } = props;

    return BaseButton({
        text, className: 'headerButton', href
    });
}
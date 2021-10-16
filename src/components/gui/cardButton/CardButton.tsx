import React from 'react';
import BaseButton from '../baseButton/BaseButton';
import './CardButton.css';

export default function CardButton(props: { text: string, href: string, svgIconPath: string}): React.ReactElement {
    return BaseButton({ className: 'cardButton', ...props });
}
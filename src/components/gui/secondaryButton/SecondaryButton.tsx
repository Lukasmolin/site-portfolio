import React from 'react'
import BaseButton from '../baseButton/BaseButton';
import './SecondaryButton.css';

export default function SecondaryButton(props: { text: string, href: string }): React.ReactElement {
    return BaseButton({ className: 'secondaryButton', ...props });
}
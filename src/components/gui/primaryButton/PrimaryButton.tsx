import React from 'react';
import BaseButton from '../baseButton/BaseButton';
import './PrimaryButton.css';

export default function PrimaryButton(props: { text: string, href: string }): React.ReactElement {
    return BaseButton({ className: 'primaryButton', ...props });
}
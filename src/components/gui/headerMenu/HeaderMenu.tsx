import React from 'react';
import HeaderButton, { HeaderButtonProps } from '../headerButton/HeaderButton';
import './HeaderMenu.css';

export default function HeaderMenu(props: { buttons: Array<HeaderButtonProps> }) {
    const { buttons } = props;
    return <nav className={"headerMenu"}>
        {
            buttons.map(btn => <HeaderButton {...btn} key={btn.href}></HeaderButton>)
        }
    </nav>
}
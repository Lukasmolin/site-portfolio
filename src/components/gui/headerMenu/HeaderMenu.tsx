import React from 'react';
import HeaderButton, { HeaderButtonData } from '../headerButton/HeaderButton';
import './HeaderMenu.css';

export interface HeaderMenuData {
    buttons: Array<HeaderButtonData>;
}

export default function HeaderMenu(props: { data: HeaderMenuData }) {
    const { buttons } = props.data;
    return <nav className={"headerMenu"}>
        {
            buttons.map(btn => <HeaderButton {...btn} key={btn.href}></HeaderButton>)
        }
    </nav>
}
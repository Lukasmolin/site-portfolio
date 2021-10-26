import React from 'react';
import Person from '../../../model/person/Person';
import BaseButton from '../baseButton/BaseButton';
import HeaderButton, { HeaderButtonData } from '../headerButton/HeaderButton';
import './HeaderMenu.css';

export interface HeaderMenuData {
    buttons: Array<HeaderButtonData>;
    social: Person['social'];
}

export default function HeaderMenu(props: { data: HeaderMenuData }) {
    const { buttons, social } = props.data;
    return <nav className='headerMenu'>
        <div className={'headerMenuContainer'}>
            {
                buttons.map(btn => <HeaderButton {...btn} key={btn.href}></HeaderButton>)
            }
            <div className='socialIcons'>
                {
                    social.map(iconInfo => {
                        return <BaseButton
                            className='headerSocialButton'
                            key={iconInfo.label}
                            href={iconInfo.href}
                            svgIconPath={iconInfo.iconName}
                        ></BaseButton>
                    })
                }
            </div>
        </div>
    </nav>;
}
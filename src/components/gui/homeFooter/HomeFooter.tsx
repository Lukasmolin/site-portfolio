import React from 'react';
import CardButton from '../cardButton/CardButton';
import CardContentHolder from '../cardContentHolder/CardContentHolder';
import { HeaderMenuData } from '../headerMenu/HeaderMenu';
import './HomeFooter.css';

export default function HomeFooter(props: { data: HeaderMenuData, heading: string, style?: React.CSSProperties }): React.ReactElement {
    const { data, heading, style } = props;

    return <footer style={style}>
        <h1>{heading}</h1>
        <CardContentHolder>
            {data.buttons
                .filter(btn => btn.href !== '/home')
                .map(btn => <CardButton label={btn.text} href={btn.href}></CardButton>)
            }
            <div className='socialButtons'>
                {data.social.map(btn => <CardButton iconName={btn.iconName} label={btn.label} href={btn.href}></CardButton>)}
            </div>
        </CardContentHolder>
    </footer>;
}
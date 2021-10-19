import React from 'react';
import SVGIcon from './SVGIcon';
import './Icon.css';


export default function Icon(iconFileName: string, label: string): React.ReactElement {
    return <>
        <SVGIcon iconFileName={iconFileName}></SVGIcon>
        <span className='iconTooltip'>{label}</span>
    </>
}
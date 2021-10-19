import React from 'react';
import SVGIcon from './SVGIcon';
import './Badge.css';

export default function Badge(props: { iconFileName: string }) {
    const { iconFileName } = props;
    return <div className='badge'>
        <SVGIcon iconFileName={iconFileName}></SVGIcon>
    </div>;
}
import React from 'react';
import SVGIcon from '../SVGElement/SVGIcon';
import './Badge.css';

export default function Badge(props: { iconFileName: string, mainColor?: string }) {
    const { iconFileName, mainColor } = props;
    const mainColorCSS = {
        '--main-color': mainColor
    } as React.CSSProperties;
    const style = mainColor ? mainColorCSS : undefined;
    return <div style={style} className='badge'>
        <SVGIcon iconFileName={iconFileName}></SVGIcon>
    </div>;
}
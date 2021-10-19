import React from 'react';
import SVGIcon from './SVGIcon';

export default function Icon(iconFileName: string, label: string): React.ReactElement {
    return <SVGIcon iconFileName={iconFileName}></SVGIcon>;
}
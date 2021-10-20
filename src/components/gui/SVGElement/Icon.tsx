import React from 'react';
import SVGIcon from './SVGIcon';

export default function Icon(props: { iconFileName: string }): React.ReactElement {
    const { iconFileName } = props;
    
    return <SVGIcon iconFileName={iconFileName}></SVGIcon>;
}
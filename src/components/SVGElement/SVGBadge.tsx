import React from 'react';
import SVGImage from './SVGImage';
import './Badge.css';

export default function SVGBadge(iconFileName: string) {
    return <div className="badge">{SVGImage(iconFileName)}</div>;
}
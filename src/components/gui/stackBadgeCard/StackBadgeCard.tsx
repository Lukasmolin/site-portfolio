import React from 'react';
import Badge from '../badge/Badge';
import CardContentHolder, { CardStyle } from '../cardContentHolder/CardContentHolder';
import './StackBadgeCard.css';

export default function StackBadgeCard(props: { iconName: string, labelText: string, color?: string }): React.ReactElement {
    const { iconName, labelText, color } = props;
    const cardStyle : CardStyle = {
        cardDetailColor: color
    }
    const labelTextCSS = {
        '--main-color': color
    } as React.CSSProperties;
    const labelStyle = color ? labelTextCSS : undefined;
    return <CardContentHolder style={cardStyle} className='stackBadgeCard'>
        <Badge mainColor={color} iconFileName={iconName}></Badge>
        <div style={labelStyle} className='stackBadgeCardLabel'>{labelText}</div>
    </CardContentHolder>;
}
import React from 'react';
import StackInfo from '../../../model/stackInfo/StackInfo';
import CardContentHolder, { CardStyle } from '../../gui/cardContentHolder/CardContentHolder';
import Badge from '../../gui/SVGElement/Badge';
import './StackInfoCard.css';

export default function StackInfoCard(props: { stackInfo: StackInfo, highlighColor?: string, glow?: boolean }): React.ReactElement {
    const { stackInfo, highlighColor } = props;
    const cardStyle: CardStyle = {
        cardDetailColor: highlighColor,
        cardShadowOnHoverColor: highlighColor
    };
    const glow = props.glow ? ' glow' : '';
    return <CardContentHolder style={cardStyle}>
        <article className={'stackInfoCardContent' + glow}>
            <div className='stackInfoBadge'>
                <Badge iconFileName={stackInfo.badgeIcon}></Badge>
            </div>
            <h1>{stackInfo.title}</h1>
            <ul>
                {stackInfo.items.map(item => <li>{item}</li>)}
            </ul>
        </article>
    </CardContentHolder>;
}
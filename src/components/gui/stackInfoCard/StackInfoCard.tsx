import React from 'react';
import StackInfo from '../../../model/stackInfo/StackInfo';
import CardContentHolder, { CardStyle } from '../cardContentHolder/CardContentHolder';
import Badge from '../badge/Badge';
import './StackInfoCard.css';

export default function StackInfoCard(props: { stackInfo: StackInfo, highlighColor?: string, smallBadge?: boolean }): React.ReactElement {
    const { stackInfo, highlighColor, smallBadge } = props;
    const cardStyle: CardStyle = {
        cardDetailColor: highlighColor,
        cardShadowOnHoverColor: highlighColor
    };
    const badgeClassName = smallBadge ? 'stackInfoSmallBadge' : 'stackInfoBadge';
    return <CardContentHolder className='stackInfoCard' style={cardStyle}>
        <article className={'stackInfoCardContent'}>
            <div className={badgeClassName}>
                <Badge iconFileName={stackInfo.badgeIcon}></Badge>
            </div>
            <h1>{stackInfo.title}</h1>
            <ul>
                {stackInfo.items.map(item => <li>{item}</li>)}
            </ul>
        </article>
    </CardContentHolder>;
}
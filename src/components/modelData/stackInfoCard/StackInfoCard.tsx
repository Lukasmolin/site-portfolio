import React from 'react';
import StackInfo from '../../../model/stackInfo/StackInfo';
import CardContentHolder from '../../gui/cardContentHolder/CardContentHolder';
import Badge from '../../gui/SVGElement/Badge';
import './StackInfoCard.css';

export default function StackInfoCard(props: { stackInfo: StackInfo }): React.ReactElement {
    const { stackInfo } = props;
    return <CardContentHolder>
        <article>
            <div className="stackInfoBadge">
                <Badge iconFileName={stackInfo.badgeIcon}></Badge>
            </div>
            <h1>{stackInfo.title}</h1>
            <ul>
                {stackInfo.items.map(item => <li>{item}</li>)}
            </ul>
        </article>
    </CardContentHolder>;
}
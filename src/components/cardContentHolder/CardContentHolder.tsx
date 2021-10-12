import React from 'react';
import './CardContentHolder.css'

export default function CardContentHolder(content: React.ReactNode) : React.ReactElement {
    return <div className={'card'}>
        {content}
    </div>;
};
import React from 'react';
import './CardContentHolder.css'

export default function CardContentHolder(props: { children: React.ReactNode }): React.ReactElement {
    const { children } = props;

    return <div className={'card'}>
        {children}
    </div>;
};
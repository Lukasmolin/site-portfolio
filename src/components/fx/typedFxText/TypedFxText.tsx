import React, { useState, useEffect } from 'react';

export default function TypedFxText(props: { children: string, finishedCallback?: () => void, keyDelay?: number }) {
    const text = props.children;
    const { finishedCallback, keyDelay } = props;
    const [displayedText, displayText] = useState('');

    useEffect(() => {
        if (displayedText.length >= text.length) {
            if(finishedCallback)
                finishedCallback();
            
            return;
        }
        setTimeout(() => displayText(text.substring(0, displayedText.length + 1)), keyDelay ?? 50);
    }, [displayedText, text, finishedCallback, keyDelay]);

    return <>{displayedText}</>;
}
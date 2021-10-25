import React, { useState, useEffect } from 'react';

export default function TypedFxText(props: { children: string, finishedCallback?: () => void }) {
    const text = props.children;
    const { finishedCallback } = props;
    const [displayedText, displayText] = useState('');

    useEffect(() => {
        if (displayedText.length >= text.length) {
            if(finishedCallback)
                finishedCallback();
            
            return;
        }
        setTimeout(() => displayText(text.substring(0, displayedText.length + 1)), 75);
    }, [displayedText, text, finishedCallback]);

    return <>{displayedText}</>;
}
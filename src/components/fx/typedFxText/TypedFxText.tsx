import React, { useState, useEffect } from 'react';

export default function TypedFxText(props: { children: string }) {
    const text = props.children;
    const [displayedText, displayText] = useState('');

    useEffect(() => {
        if (displayedText.length >= text.length)
            return;
        setTimeout(() => displayText(text.substring(0, displayedText.length + 1)), 75);
    }, [displayedText, text]);

    return <>{displayedText}</>;
}
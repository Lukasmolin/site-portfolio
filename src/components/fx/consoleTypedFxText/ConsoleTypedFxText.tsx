import React, { useEffect, useRef, useState } from "react";
import TypedFxText from "../typedFxText/TypedFxText";

export default function ConsoleTypedFxText(props: { textLines: string[], onFinishedCallback?: () => void }): React.ReactElement {
    const { textLines, onFinishedCallback } = props;
    const cursor = useRef<HTMLSpanElement>(null);
    const [numLinesDisplayed, setNumLinesDisplayed] = useState(0);

    useEffect(() => {
        const toggleCursor = () => {
            const style = cursor.current?.style;
            if (style)
                style.color = style.color === 'rgba(0, 0, 0, 0)' ? '' : 'rgba(0, 0, 0, 0)';
        }
        const interval = setInterval(() => toggleCursor(), 500);
        const cleanUp = () => {
            clearInterval(interval);
        };
        return cleanUp;
    }, [cursor]);

    const writingText = textLines[numLinesDisplayed];
    const breakLine = () => {
        if(numLinesDisplayed + 1 < textLines.length)
            setNumLinesDisplayed(numLinesDisplayed + 1);
        else
            onFinishedCallback && onFinishedCallback();
    };

    const getWritten = (): React.ReactElement[] | undefined => {
        if (numLinesDisplayed === 0)
            return;

        return textLines.slice(0, numLinesDisplayed).map(line => <div key={'written' + line}>{line}</div>);
    };

    const getWritting = (): React.ReactElement | undefined => {
        const nextLine = textLines[numLinesDisplayed];
        if (!nextLine)
            return;

        return <div>
            <TypedFxText key={nextLine} finishedCallback={breakLine}>{writingText}</TypedFxText>
            <span ref={cursor}>&#9602;</span>
        </div>;
    };

    const written = getWritten(), writting = getWritting();
    return <>{written && written}{writting && writting}</>;
}
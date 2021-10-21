import React, { useEffect, useRef } from "react";
import TypedFxText from "../typedFxText/TypedFxText";

export default function ConsoleTypedFxText(props: { children: string }) : React.ReactElement {
    const cursor = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const toggleCursor = () => {
            const style = cursor.current?.style;
            if(style)
                style.color = style.color === 'rgba(0, 0, 0, 0)' ? '' : 'rgba(0, 0, 0, 0)';

            console.log(style?.color);
        }
        const interval = setInterval(() => toggleCursor(), 500);
        const cleanUp = () => {
            clearInterval(interval);
        }
        return cleanUp;
    }, [ cursor ]);
    return <><TypedFxText>{props.children}</TypedFxText><span ref={cursor}>&#9602;</span></>
}
import React from 'react';
import SVGIcon from '../SVGElement/SVGIcon';
import './BaseButton.css';
import './ButtonIcon.css';

export default function BaseButton(props: { text: string, href?: string, className?: string, svgIconPath?: string }): React.ReactElement {
    const { text, href, className, svgIconPath } = props;
    const toAppendClass = className ? ' ' + className : '';
    const handleDivClick = (ev: React.MouseEvent<HTMLDivElement>) => {
        const target = (ev.target as HTMLElement);
        if(!target || target.tagName === 'A')
            return;
        
        const div = target.tagName === 'DIV' ? target : target.parentElement
        div?.getElementsByTagName('a')[0]?.click();  
    };
    return <div onClick={ev => handleDivClick(ev)} className={'button' + toAppendClass}>
        <a href={href}>
            {text}
        </a>
        {svgIconPath && <SVGIcon iconFileName={svgIconPath}></SVGIcon>}
    </div>;
}
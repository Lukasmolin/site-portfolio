import React from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from '../SVGElement/SVGIcon';
import './BaseButton.css';
import './ButtonIcon.css';

export default function BaseButton(props: { text?: string, href: string, className?: string, svgIconPath?: string }): React.ReactElement {
    const { text, href, className, svgIconPath } = props;
    const toAppendClass = className ? ' ' + className : '';
    const externalLink = href.startsWith('http');
    const toLink = externalLink ? undefined : href;
    const externalRedirect = !externalLink ? undefined : () => {
        window.location.href = href;
        return null;
    };

    return <Link className={'button' + toAppendClass} to={{ pathname: toLink }} onClick={externalRedirect}>
        {text && <div className='buttonText'>
            {text}
        </div>}
        {svgIconPath && <div className='buttonIcon'>
            <SVGIcon iconFileName={svgIconPath}></SVGIcon>
        </div>}
    </Link>;
}
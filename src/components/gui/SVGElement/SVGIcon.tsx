import React from 'react';

export default function SVGIcon(props: { iconFileName: string, className?: string }): React.ReactElement {
    const { iconFileName, className } = props;
    const appendClassName = className ? ' ' + className : '';
    return <>
        <img className={'svgIcon' + appendClassName} src={'icons/' + iconFileName} alt="Button logo" />
    </>;
}
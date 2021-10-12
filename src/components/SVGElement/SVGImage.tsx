import react from 'react';

export default function SVGImage(iconFileName: string): React.ReactElement {
    return <img src={'icons/' + iconFileName} alt="Button logo"/>
}
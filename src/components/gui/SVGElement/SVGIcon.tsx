import React from 'react';
import SVGAssets from '../../../assets/SVGAssets';

export default function SVGIcon(props: { iconFileName: string }): React.ReactElement {
    const { iconFileName } = props;
    if (iconFileName in SVGAssets)
        return SVGAssets[iconFileName as keyof SVGAssets];

    throw new Error('Icon not found: ' + iconFileName);
}
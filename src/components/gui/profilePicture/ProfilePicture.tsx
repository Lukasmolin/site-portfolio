import React from "react";

export default function ProfilePicture(props: { imgUrl: string, className?: string; }): React.ReactElement {
    const { imgUrl, className } = props;
    const appendClassName = className ? ' ' + className : '';

    return <div className={'profilePic' + appendClassName}>
        <img src={imgUrl} alt='Profile' />
    </div>
}
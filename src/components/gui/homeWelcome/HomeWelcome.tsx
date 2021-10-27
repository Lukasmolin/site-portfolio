import React from "react";
import ConsoleTypedFxText from "../../fx/consoleTypedFxText/ConsoleTypedFxText";
import ProfilePicture from "../profilePicture/ProfilePicture";
import './HomeWelcome.css';

export default function HomeWelcome(props: { profilePicUrl: string, textLines: string[], onFinishedCallback: () => void }): React.ReactElement {
    const { profilePicUrl, textLines, onFinishedCallback } = props;
    return <section className='welcomeSection'>
        <div className='consoleStyleText'>
            <ConsoleTypedFxText
                textLines={textLines}
                onFinishedCallback={onFinishedCallback}
            ></ConsoleTypedFxText>
        </div>
        <ProfilePicture imgUrl={profilePicUrl}></ProfilePicture>
    </section>
}
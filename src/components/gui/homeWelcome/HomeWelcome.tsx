import React from "react";
import ConsoleTypedFxText from "../../fx/consoleTypedFxText/ConsoleTypedFxText";
import CardContentHolder from "../cardContentHolder/CardContentHolder";
import ProfilePicture from "../profilePicture/ProfilePicture";
import './HomeWelcome.css';

export default function HomeWelcome(props: { profilePicUrl: string, textLines: string[], onFinishedCallback: () => void }) : React.ReactElement {
    const { profilePicUrl, textLines, onFinishedCallback } = props;
    return <section className='welcomeSection'>
        <ProfilePicture imgUrl={profilePicUrl}></ProfilePicture>
        <CardContentHolder className='consoleStyleText'>
            <ConsoleTypedFxText
                textLines={textLines}
                onFinishedCallback={onFinishedCallback}
            ></ConsoleTypedFxText>
        </CardContentHolder>
    </section>
}
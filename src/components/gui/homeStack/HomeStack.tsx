import React from "react";
import Tech from "../../../model/tech/Tech";
import HomePageData from "../../../pages/pageComponents/home/HomePageData";
import ComeFromPlaceFx from "../../fx/comePlaceBottomFx/ComeFromPlaceFx";
import StackBadgeCard from "../stackBadgeCard/StackBadgeCard";
import './HomeStack.css';

export default function HomeStack(props: { isContentVisible: boolean, techs: HomePageData['favoriteTechs'] }): React.ReactElement {
    const { isContentVisible, techs } = props;
    const invisibleCSS = { opacity: 0 };
    const invisibleStyle = !isContentVisible ? invisibleCSS : undefined;

    function createRow(techs: Tech[]) {
        return <ul>
            {techs.map((tech, index, arr) => {
                const isFirstCard = index === 0 ? 'left' : undefined;
                const isLastCard = index === arr.length - 1 ? 'right' : undefined;
                const moveFromSide = isFirstCard || isLastCard;
                return <li key={tech.name}>
                    <ComeFromPlaceFx
                        allowMoveUp={isContentVisible}
                        from={moveFromSide || 'down'}
                        transitionTime={1}
                    >
                        <StackBadgeCard iconName={tech.iconName} labelText={tech.name}/>
                    </ComeFromPlaceFx>
                </li>;
            })}
        </ul>;
    }

    return <section className='stackSection' style={invisibleStyle}>
        <h1>{techs.headingText}</h1>
        <div className='mainStackCards'>
            {createRow(techs.upperRow)}
            {createRow(techs.middleRow)}
            {createRow(techs.bottomRow)}
        </div>
    </section>;
}
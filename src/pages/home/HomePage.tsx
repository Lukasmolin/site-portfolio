import React from "react";
import getHeaderMenuData from "../datasourceGetters/getHeaderMenuData";
import './HomePage.css';
import HeaderButton from "../../components/gui/headerButton/HeaderButton";

const menuData = getHeaderMenuData();

export default function HomePage(): React.ReactElement {
    return <>
        <main className='homePage'>
            {menuData.buttons
                .filter(btn => btn.href !== '/home')
                .map(btn => {
                    return <HeaderButton
                        href={btn.href} text={btn.text} key={btn.text}
                    ></HeaderButton>;
                })
            }
        </main>
    </>
}
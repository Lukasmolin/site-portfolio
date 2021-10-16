import React from "react";
import getHeaderMenuData from "../datasourceGetters/getHeaderMenuData";
import CardContentHolder from "../../components/gui/cardContentHolder/CardContentHolder";
import './HomePage.css';
import { Link } from "react-router-dom";

const menuData = getHeaderMenuData();

export default function HomePage(): React.ReactElement {
    return <>
        <main className='homePage'>
            <div>
                {menuData.buttons
                    .filter(btn => btn.href !== '/home')
                    .map(btn => {
                        return <Link key={btn.text} to={btn.href}><CardContentHolder>
                            {btn.text}
                        </CardContentHolder></Link>;
                    })}
            </div>
        </main>
    </>
}
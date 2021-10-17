import AboutMeData from "../aboutMe/AboutMeData";
import AboutMeDatasource from "../../datasource/AboutMeDatasource";

const aboutMeData = new AboutMeDatasource();

export default function getAboutMeData(): AboutMeData {
    return aboutMeData;
};
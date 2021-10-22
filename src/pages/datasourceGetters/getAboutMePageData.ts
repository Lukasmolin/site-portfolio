import AboutMePageData from "../pageComponents/aboutMe/AboutMePageData";
import aboutMePageDatasource from "../../datasource/pages/aboutMePageDatasource"

export default function getAboutMePageData(): AboutMePageData {
    return aboutMePageDatasource;
};
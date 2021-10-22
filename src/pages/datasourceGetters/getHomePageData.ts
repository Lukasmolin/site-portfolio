import HomePageData from "../pageComponents/home/HomePageData";
import homePageDatasource from "../../datasource/pages/homePageDatasource";

export default function getHomePageData() : HomePageData {
    return homePageDatasource;
}
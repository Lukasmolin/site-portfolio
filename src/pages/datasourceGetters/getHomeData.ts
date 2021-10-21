import HomeData from "../pageComponents/home/HomeData";
import ownerDatasource from "../../datasource/ownerDatasource";

export default function getHomeData() : HomeData {
    return {
        welcomeMessage: 'Olá, eu sou o Lucas ;)',
        aboutMe: ownerDatasource.aboutMe,
        profilePicUrl: ownerDatasource.profilePictureUrl,
        myStack: []
    }
}
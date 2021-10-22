import HomePageData from "../../pages/pageComponents/home/HomePageData";
import ownerDatasource from "../model/ownerDatasource";

const homePageDatasource: HomePageData = {
    welcomeMessage: 'Olá, eu sou o Lucas ;)',
    aboutMe: ownerDatasource.aboutMe,
    profilePicUrl: ownerDatasource.profilePictureUrl,
    myStack: []
};

export default homePageDatasource;
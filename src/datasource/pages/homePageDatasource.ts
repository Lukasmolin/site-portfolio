import HomePageData from "../../pages/pageComponents/home/HomePageData";
import ownerDatasource from "../model/ownerDatasource";
import projectInfoDatasource from "../model/projectInfoDatasource";

const homePageDatasource: HomePageData = {
    welcomeMessage: ['Oi, sou o Lucas ;)'],
    profilePicUrl: ownerDatasource.profilePictureUrl,
    favoriteTechs: {
        headingText: `O que eu curto usar:`,
        upperRow: ownerDatasource.favoriteStack.slice(0, 3),
        middleRow: ownerDatasource.favoriteStack.slice(3, 7),
        bottomRow: ownerDatasource.favoriteStack.slice(7, 10)
    },
    favoriteProjects: {
        headingText: `Alguns dos meus projetos:`,
        projects: projectInfoDatasource.slice(0,3)
    },
    footerSectionHeading: `Quer saber mais?`
};

export default homePageDatasource;
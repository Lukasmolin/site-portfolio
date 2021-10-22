import ownerDatasource from '../model/ownerDatasource';
import stackInfoDatasource from '../model/stackInfoDatasource';
import AboutMePageData from '../../pages/pageComponents/aboutMe/AboutMePageData';

const aboutMePageDatasource: AboutMePageData = {
    title:`Sobre mim:`,
    text: ownerDatasource.aboutMe,
    cardsTitle : `Meu stack`,
    cards : {
        left: { up: stackInfoDatasource[2], down: stackInfoDatasource[3] },
        centerLeft: stackInfoDatasource[0],
        centerRight: stackInfoDatasource[1],
        right: { up: stackInfoDatasource[4], down: stackInfoDatasource[5] }
    }
};

export default aboutMePageDatasource;
import AboutMeData from '../pageComponents/aboutMe/AboutMeData';
import ownerDatasource from '../../datasource/ownerDatasource';
import stackInfoDatasource from '../../datasource/stackInfoDatasource';

export default function getAboutMeData(): AboutMeData {
    return {
        title:`Sobre mim:`,
        text: ownerDatasource.aboutMe,
        cardsTitle : `Meu stack`,
        cards : {
            left: { up: stackInfoDatasource[2], down: stackInfoDatasource[3] },
            centerLeft: stackInfoDatasource[0],
            centerRight: stackInfoDatasource[1],
            right: { up: stackInfoDatasource[4], down: stackInfoDatasource[5] }
        }
    }
};
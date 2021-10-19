import AboutMeData from '../pageComponents/aboutMe/AboutMeData';
import AboutMeDatasource from '../../datasource/AboutMeDatasource';

const aboutMeData = new AboutMeDatasource();

export default function getAboutMeData(): AboutMeData {
    return aboutMeData;
};
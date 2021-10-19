import Tech from '../tech/Tech';
import WebLink from '../webLink/WebLink';

export default interface ProjectInfo {
    projectTitle: string;
    projectDescription: string;
    relatedLinks?: WebLink[];
    techs: Array<Tech>;
}
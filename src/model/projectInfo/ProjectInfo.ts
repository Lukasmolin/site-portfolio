import Tech from "../tech/Tech";

export default interface ProjectInfo {
    projectTitle: string;
    projectDescription: string;
    relatedLinks?: Array<{
        label: string;
        url: string;
        iconName: string;
    }>;
    techs: Array<Tech>;
}
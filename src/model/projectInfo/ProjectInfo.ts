export default interface ProjectInfo {
    projectTitle: string;
    projectDescription: string;
    projectIconUrl: string;
    relatedLinks?: Array<{
        label: string;
        link: string;
    }>;
    tags?: Array<string>;
}
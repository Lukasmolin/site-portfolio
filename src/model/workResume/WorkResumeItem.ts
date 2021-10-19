import WebLink from "../webLink/WebLink";

export default interface WorkResumeItem {
    heading?: string;
    duration?: {
        start: Date;
        end?: Date;
    };
    content: string[];
    referenceLink?: WebLink;
}
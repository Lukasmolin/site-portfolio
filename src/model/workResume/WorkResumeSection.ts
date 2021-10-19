import WorkResumeItem from "./WorkResumeItem";

export default interface WorkResumeSection {
    label: string;
    heading?: string;
    items: WorkResumeItem[];
}
import Person from "../person/Person";
import WorkResumeSection from "./WorkResumeSection";

export default interface WorkResume {
    owner: Person;
    quote: {
        authorName: string;
        text: string;
    };
    content: WorkResumeSection[];
}
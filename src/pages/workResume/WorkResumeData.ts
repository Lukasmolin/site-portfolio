import WorkResumeInfoCardData from './workResumeInfoCard/WorkResumeInfoCardData';
import WorkResumeTitleData from './workResumeTitle/WorkResumeTitleData';

export default interface WorkResumeData {
    title: WorkResumeTitleData;
    quote: {
        authorName: string;
        text: string;
    };
    mainObjective: string;
    softSkillsHeading: string;
    softSkills: string[];
    experiencesHeading: string;
    experiences: WorkResumeInfoCardData[];
    educationHeading: string;
    education: WorkResumeInfoCardData[];
}
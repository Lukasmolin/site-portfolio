import WorkResumeTitleData from './workResumeTitle/WorkResumeTitleData';

export default interface WorkResumeData {
    title: WorkResumeTitleData;
    quote: {
        authorName: string;
        text: string;
    };
}
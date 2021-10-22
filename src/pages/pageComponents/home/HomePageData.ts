import StackInfo from "../../../model/stackInfo/StackInfo";

export default interface HomePageData {
    welcomeMessage: string;
    aboutMe: string;
    profilePicUrl: string;
    myStack: StackInfo[];
}
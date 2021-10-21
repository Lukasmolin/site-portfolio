import StackInfo from "../../../model/stackInfo/StackInfo";

export default interface HomeData {
    welcomeMessage: string;
    aboutMe: string;
    profilePicUrl: string;
    myStack: StackInfo[];
}
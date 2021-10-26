import Tech from "../../../model/tech/Tech";

export default interface HomePageData {
    welcomeMessage: string[];
    profilePicUrl: string;
    favoriteTechs: {
        headingText: string;
        upperRow: Tech[];
        middleRow: Tech[];
        bottomRow: Tech[];
    }
}
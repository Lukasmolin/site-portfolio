import Tech from "../tech/Tech";
import WebLink from "../webLink/WebLink";

export default interface Person {
    name: string;
    role: string;
    address: string;
    aboutMe: string;
    profilePictureUrl: string;
    social: WebLink[];
    favoriteStack: Tech[]
}
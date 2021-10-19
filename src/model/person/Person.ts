import WebLink from "../webLink/WebLink";

export default interface Person {
    name: string;
    role: string;
    adress: string;
    aboutMe: string;
    profilePictureUrl: string;
    social: WebLink[];
}
export default interface Person {
    name: string;
    role: string;
    adress: string;
    aboutMe: string;
    profilePictureUrl: string;
    social: Array<{
        href: string;
        iconName: string;
        label: string;
    }>;
}
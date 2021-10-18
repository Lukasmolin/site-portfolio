export default interface WorkResumeTitleData {
    personName: string;
    personRole: string;
    personAddress: string;
    personSocial: Array<{
        href: string;
        svgIcon: string;
        btnText: string;
    }>;
    profilePicURL: string;
}
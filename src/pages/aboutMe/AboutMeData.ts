import StackInfo from "../../model/stackInfo/StackInfo";

export default interface AboutMeData {
    text: string;
    cards: {
        left: {
            up: StackInfo,
            down: StackInfo
        }
        centerLeft: StackInfo,
        centerRight: StackInfo,
        right: {
            up: StackInfo,
            down: StackInfo
        }
    }
}
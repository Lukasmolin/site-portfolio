import StackInfo from '../../../model/stackInfo/StackInfo';

export interface StackColor {
    color?: string;
}

export default interface AboutMeData {
    title: string;
    text: string;
    cardsTitle: string;
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
    style?: {
        left?: {
            up?: StackColor,
            down?: StackColor
        }
        centerLeft?: StackColor,
        centerRight?: StackColor,
        right?: {
            up?: StackColor,
            down?: StackColor
        }
    }
}
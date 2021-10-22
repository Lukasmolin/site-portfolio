import Tech from "../../model/tech/Tech"

export abstract class Techs {
    public static readonly java: Tech = {
        category: 'Back-end',
        iconName: 'java',
        name: 'Java'
    }

    public static readonly node: Tech = {
        category: 'Back-end',
        iconName: 'node',
        name: 'Node'
    }
}
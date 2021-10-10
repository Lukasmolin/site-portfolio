import CardInfo from "../../model/cardInfo/CardInfo";
import FileParser from "../FileParser";

export default class CardInfoParser extends FileParser<CardInfo> {

    public parse(json: any) {
        const match: CardInfo = {
            projectDescription: "",
            projectIconUrl: "",
            projectTitle: ""
        };
        for (const prop in match) {
            const field = json[prop];
            if(!field)
                throw new Error('Unable to parse, undefinded field');
        }
        return json as CardInfo;
    }

} 
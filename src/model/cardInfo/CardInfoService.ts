import GenericRepository from "../GenericRepository";
import CardInfo from "./CardInfo";

export default class CardInfoService {

    constructor(private readonly repository: GenericRepository<CardInfo>) {

    }

    public getAll() {
        return this.repository.getAll();
    }

    public getByTag(tag: string) {
        return this.repository.getAll().filter(card => {
            return card.tags?.some(cardTag => {
                return tag === cardTag;
            });
        });
    }

}
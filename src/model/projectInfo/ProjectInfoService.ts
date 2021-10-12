import GenericRepository from "../GenericRepository";
import ProjectInfo from "./ProjectInfo";

export default class ProjectInfoService {

    constructor(private readonly repository: GenericRepository<ProjectInfo>) {

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
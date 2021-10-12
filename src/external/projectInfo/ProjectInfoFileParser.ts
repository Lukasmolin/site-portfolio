import ProjectInfo from "../../model/projectInfo/ProjectInfo";
import FileParser from "../FileParser";

export default class ProjectInfoParser extends FileParser<ProjectInfo> {

    public parse(json: any) {
        const match: ProjectInfo = {
            projectDescription: "",
            projectIconUrl: "",
            projectTitle: ""
        };
        for (const prop in match) {
            const field = json[prop];
            if(!field)
                throw new Error('Unable to parse, undefinded field');
        }
        return json as ProjectInfo;
    }

} 
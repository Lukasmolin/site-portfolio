import ProjectsPageData from "../pageComponents/projects/ProjectsData";
import ProjectInfoDatasource from '../../datasource/ProjectInfoDatasource';

const projects = ProjectInfoDatasource;

export default function getProjectsData(): ProjectsPageData {
    return { projects };
}
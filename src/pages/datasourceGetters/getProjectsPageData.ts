import ProjectsPageData from "../pageComponents/projects/ProjectsPageData";
import projectsPageDatasource from "../../datasource/pages/projectsPageDatasource";

export default function getProjectsPageData(): ProjectsPageData {
    return projectsPageDatasource;
}
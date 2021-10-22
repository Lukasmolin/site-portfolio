import WorkResumePageData from "../../pages/pageComponents/workResume/WorkResumePageData";
import workResumeDatasource from "../model/workResumeDatasource";
import ownerDatasource from "../model/ownerDatasource";

const workResumePageDatasource: WorkResumePageData = {
    person: ownerDatasource, workResume: workResumeDatasource
};

export default workResumePageDatasource;
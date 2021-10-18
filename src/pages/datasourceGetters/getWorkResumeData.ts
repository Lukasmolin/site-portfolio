import WorkResumeData from '../workResume/WorkResumeData';
import WorkResumeDatasource from '../../datasource/WorkResumeDatasource';

const data = new WorkResumeDatasource();

export default function getWorkResumeData() : WorkResumeData {
    return data;
}
import WorkResumeData from '../pageComponents/workResume/WorkResumeData';
import WorkResumeDatasource from '../../datasource/workResumeDatasource';
import ownerDatasource from '../../datasource/ownerDatasource';

const workResume = WorkResumeDatasource;
const person = ownerDatasource;

export default function getWorkResumeData(): WorkResumeData {
    return {
        person, workResume
    };
}
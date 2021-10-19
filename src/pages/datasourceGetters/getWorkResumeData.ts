import WorkResumeData from '../pageComponents/workResume/WorkResumeData';
import WorkResumeDatasource from '../../datasource/WorkResumeDatasource';
import OwnerDatasource from '../../datasource/OwnerDatasource';

const workResume = WorkResumeDatasource;
const person = OwnerDatasource;

export default function getWorkResumeData(): WorkResumeData {
    return {
        person, workResume
    };
}
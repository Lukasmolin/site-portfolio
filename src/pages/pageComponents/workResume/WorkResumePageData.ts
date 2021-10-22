import Person from '../../../model/person/Person';
import WorkResume from '../../../model/workResume/WorkResume';

export default interface WorkResumePageData {
    workResume: WorkResume;
    person: Person;
}
import Person from '../../../model/person/Person';
import WorkResume from '../../../model/workResume/WorkResume';

export default interface WorkResumeData {
    workResume: WorkResume;
    person: Person;
}
import Student from '../../interfaces/Student';

export const SAVE_STUDENTS = 'Students Page [SAVE]'

export class SaveStudents  {
    readonly type = SAVE_STUDENTS;
    constructor(public payload: Array<Student>) { }
}


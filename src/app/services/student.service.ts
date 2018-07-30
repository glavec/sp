import { Injectable } from '@angular/core';
import Student from '../interfaces/Student';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import { SaveStudents} from '../store/studentPage/action';
import {State} from '../store/store';
import Filter from '../interfaces/Filter';
import {students} from '../fakeData/data';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    private students: Array<Student>
    private selectedFaxFilter: Filter
    private selectedCourseFilter: Filter
    private selectedYearFilter: Filter
    private selectedName: string

  constructor(private store: Store<State> ) {
        this.store.select('filter').subscribe(filter => {
            this.selectedFaxFilter = filter.selectedFilterFax;
            this.selectedCourseFilter = filter.selectedFilterCourse;
            this.selectedYearFilter = filter.selectedFilterYear;
            this.selectedName = filter.selectedName;
        });
        this.students = students;
  }

  // simulate http request
  public  getStudents(): Observable<Array<Student>> {
      return new Observable((observer) => {
          let students = this.students;

          if (this.selectedFaxFilter) {
              students = students.filter((student: Student) => student.fax === this.selectedFaxFilter.value);
          }
          if (this.selectedCourseFilter) {
              students = students.filter((student: Student) => student.fax === this.selectedCourseFilter.value);
          }
          if (this.selectedYearFilter) {
              students = students.filter((student: Student) => student.year === this.selectedYearFilter.value);
          }

          if (this.selectedName) {
              students = students.filter((student: Student) => student.name.includes(this.selectedName));
          }

        observer.next(students);
        observer.complete();
      });
  }

  public updateState(students: Array<Student>) {
      this.store.dispatch(new SaveStudents(students));
  }

}

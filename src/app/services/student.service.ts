import { Injectable } from '@angular/core';
import Student from '../interfaces/Student';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as studentReducer from '../store/studentPage/reducer';
import {SAVE_STUDENTS, SaveStudents} from '../store/studentPage/action';
import {State} from '../store/store';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    private students: any

  constructor(private store: Store<State> ) {
        // this.students = store.select<State>('student');
  }

  public  getStudents(): Observable<Array<Student>> {
      return new Observable((observer) => {

          const students: Array<Student> = [
                    {
                      name: 'test',
                        id: '342423'
                    },
                    {
                        name: 'test2',
                        id: '32232'
                    }
                ];
          this.updateState(students)
        observer.next(students);
        observer.complete();
      });
  }

  public updateState(students: Array<Student>) {
      console.log(this.store.select('student'));
  }
}

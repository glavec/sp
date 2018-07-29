import { Injectable } from '@angular/core';
import Student from '../interfaces/Student';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import { SaveStudents} from '../store/studentPage/action';
import {State} from '../store/store';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    private students: any

  constructor(private store: Store<State> ) {
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
        observer.next(students);
        observer.complete();
      });
  }

  public updateState(students: Array<Student>) {
      this.store.dispatch(new SaveStudents(students));
  }

}

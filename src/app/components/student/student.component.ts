import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import Student from '../../interfaces/Student';
import { Store } from '@ngrx/store';
import { State } from '../../store/store';
import { filterAplied } from '../../store/filters/action';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    public students: Array<Student>
    constructor(private studentService: StudentService,
                private state: Store<State>
    ) {
        this.state.select('filter').subscribe(store => {
            if (store.filterChanged) {
                this.filterChanged();
            }
        });
    }

    ngOnInit() {
        this.loadStudents();
    }

    loadStudents() {
        this.studentService.getStudents().subscribe(res => {
            this.students = res;
            this.studentService.updateState(this.students);
        });

    }

    filterChanged() {
        this.state.dispatch(new filterAplied);
        this.loadStudents();
    }

}

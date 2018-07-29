import {Component, OnInit, ViewChild} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../store/store';
import Student from '../../../interfaces/Student';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  students: Student[];

  constructor(private store: Store<State>) { 
    this.students = []

  }

  ngOnInit() {
    this.store.select('student')
    .subscribe((result) => {
      this.students = result.students      
    })
    
  }

}

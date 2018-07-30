import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {State} from '../../../store/store';
import {FilterByName} from '../../../store/filters/action';
import {FilterService} from '../../../services/filter.service';
import Filter from '../../../interfaces/Filter';

@Component({
    selector: 'app-search-panel',
    templateUrl: './search-panel.component.html',
    styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

    private name: string;
    private selectedCourse: Filter;
    constructor(private store: Store<State>, private filterService: FilterService) {
      this.name = '';
        this.selectedCourse = {value: 0, name: 'All Courses'}
      this.store.select('filter').subscribe(filter => {
          if (filter.selectedFilterCourse && filter.selectedFilterCourse.name) {
              this.selectedCourse = filter.selectedFilterCourse;
          }
      });
    }

    ngOnInit() {
    }

    search(ev) {
        this.name = ev.target.value;
        this.store.dispatch(new FilterByName(this.name));
        this.filterService.filterChanged();
    }

}

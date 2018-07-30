import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilterService } from '../../../services/filter.service';
import Filter from '../../../interfaces/Filter';
import { Store } from '@ngrx/store';
import {State} from '../../../store/store';
import {SaveSelectedFilterCourse, SaveSelectedFilterFax, SaveSelectedFilterYear} from '../../../store/filters/action';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FiltersComponent implements OnInit {

    private faxFilters: Array<Filter>
    private courseFilters: Array<Filter>
    private years: Array<Filter>
    constructor(private filterService: FilterService, private store: Store<State>) {
      this.faxFilters = [];
      this.courseFilters = [];
      this.years = [];
    }

    ngOnInit() {
        this.filterService.getFaxFilters().subscribe(filters => {
            this.faxFilters = filters;
        });
        this.filterService.getCourseFilters().subscribe(filters => {
            this.courseFilters = filters;
        });
        this.filterService.getYearFilters().subscribe(filters => {
            this.years = filters;
        });
    }

    filterChanged(ev, field) {
        if (field === 'fax' && ev.source.selected) {
            this.store.dispatch(new SaveSelectedFilterFax({value: ev.source.value, name: ev.source.viewValue}));
            this.filterService.filterChanged();
        }

        if (field === 'course' && ev.source.selected) {
            this.store.dispatch(new SaveSelectedFilterCourse({value: ev.source.value, name: ev.source.viewValue}))
            this.filterService.filterChanged();
        }

        if (field === 'year' && ev.source.selected) {
            this.store.dispatch(new SaveSelectedFilterYear({value: ev.source.value, name: ev.source.viewValue}))
            this.filterService.filterChanged();
        }

    }

}

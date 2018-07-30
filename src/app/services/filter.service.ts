import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/filters/reducer';
import {filterChanged} from '../store/filters/action';
import Filter from '../interfaces/Filter';
import {Observable} from 'rxjs';
import {courses, faculties, years} from '../fakeData/data';

@Injectable({
    providedIn: 'root'
})
export class FilterService {
    private faculties: Array<Filter>
    private courses: Array<Filter>
    private years: Array<Filter>
    constructor(private store: Store<State>) {
        this.faculties = faculties;
        this.courses = courses;
        this.years = years;
    }

    filterChanged() {
        this.store.dispatch(new filterChanged);
    }

    public  getFaxFilters(): Observable<Array<Filter>> {
        return new Observable((observer) => {

            const filters =  this.faculties
            observer.next(filters);
            observer.complete();
        });
    }

    public  getCourseFilters(): Observable<Array<Filter>> {
        return new Observable((observer) => {

            const filters = this.courses;
            observer.next(filters);
            observer.complete();
        });
    }

    public  getYearFilters(): Observable<Array<Filter>> {
        return new Observable((observer) => {

            const filters = this.years;
            observer.next(filters);
            observer.complete();
        });
    }

}


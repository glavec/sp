import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/filters/reducer';
import { filterChanged, filterAplied } from '../store/filters/action';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor(private store: Store<State>) { }

  filterChanged() {
    this.store.dispatch(new filterChanged)
  }
}


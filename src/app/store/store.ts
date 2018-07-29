import {ActionReducerMap} from '@ngrx/store/src/models';
import * as studentReducer from './studentPage/reducer';
import * as filterReducer from './filters/reducer';

export interface State {
    student: studentReducer.State;
    filter: filterReducer.State;
}
export  const reducers: ActionReducerMap<State> = {
  student: studentReducer.reducer,
  filter: filterReducer.reducer
};

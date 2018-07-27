import {ActionReducerMap} from '@ngrx/store/src/models';
import * as studentReducer from './studentPage/reducer';

export interface State {
    student: studentReducer.State;
}
export  const reducers: ActionReducerMap<State> = {
  student: studentReducer.reducer
};

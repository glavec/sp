import Student from '../../interfaces/Student';
import * as fromActions from './action';

export interface State {
    students: Array<Student>;
}

export const initialState: State = {
    students: []
}

export function reducer(state: State = initialState, action: {type: string, payload: any}) {
    switch (action.type) {

        case fromActions.SAVE_STUDENTS: {
            return {
                ...state,
                students: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

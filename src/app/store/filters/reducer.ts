import * as fromActions from './action';

export interface State {
    filterChanged: boolean;
}

export const initialState: State = {
    filterChanged: false
}

export function reducer(state: State = initialState, action: {type: string, payload: any}) {
    switch (action.type) {

        case fromActions.FILTER_CHANGE: {

            return {
                ...state,
                filterChanged: true
            };
        }

        case fromActions.FILTER_APPLIED: {

            return {
                ...state,
                filterChanged: false
            };
        }
        default: {
            return state;
        }
    }
}

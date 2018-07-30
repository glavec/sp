import * as fromActions from './action';
import Filter from '../../interfaces/Filter';

export interface State {
    filterChanged: boolean;
    faxDropDown: Array<Filter>;
    courseDropDown: Array<Filter>;
    yearsDropDown: Array<Filter>;
    selectedFilterFax: Filter;
    selectedFilterCourse: Filter;
    selectedFilterYear: Filter;
    selectedName: string;
}

export const initialState: State = {
    filterChanged: false,
    faxDropDown: [],
    courseDropDown: [],
    yearsDropDown: [],
    selectedFilterFax: null,
    selectedFilterCourse: null,
    selectedFilterYear: null,
    selectedName: null
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

        case fromActions.SAVE_FILTERS_FAX: {

            return {
                ...state,
                faxDropDown: action.payload
            };
        }

        case fromActions.SAVE_SELECTED_FILTERS_FAX: {

            return {
                ...state,
                selectedFilterFax: action.payload
            };
        }

        case fromActions.SAVE_FILTERS_COURSE: {

            return {
                ...state,
                faxDropDown: action.payload
            };
        }

        case fromActions.SAVE_SELECTED_FILTERS_COURSE: {

            return {
                ...state,
                selectedFilterCourse: action.payload
            };
        }

        case fromActions.SAVE_FILTERS_YEAR: {

            return {
                ...state,
                yearsDropDown: action.payload
            };
        }

        case fromActions.SAVE_SELECTED_FILTERS_YEAR: {

            return {
                ...state,
                selectedFilterYear: action.payload
            };
        }

        case fromActions.FILTER_BY_NAME: {

            return {
                ...state,
                selectedName: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

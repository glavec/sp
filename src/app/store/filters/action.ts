import Filter from '../../interfaces/Filter';

export const FILTER_CHANGE = 'Filters [FILTER CHANGE]'
export const FILTER_APPLIED = 'Filters [FILTER APPLIED]'
export const SAVE_FILTERS_FAX = 'Filters [SAVE FILTERS FAX]'
export const SAVE_SELECTED_FILTERS_FAX = 'Filters [SAVE SELECTED FILTERS FAX]'
export const SAVE_FILTERS_COURSE = 'Filters [SAVE FILTERS COURSE]'
export const SAVE_SELECTED_FILTERS_COURSE = 'Filters [SAVE SELECTED FILTERS COURSE]'
export const SAVE_FILTERS_YEAR = 'Filters [SAVE FILTERS YEAR]'
export const SAVE_SELECTED_FILTERS_YEAR = 'Filters [SAVE SELECTED FILTERS YEAR]'
export const FILTER_BY_NAME = 'Filters [FILTER BY NAME]'


export class filterChanged  {
    readonly type = FILTER_CHANGE;
    constructor() { }
}

export class filterAplied  {
    readonly type = FILTER_APPLIED;
    constructor() { }
}

export class SaveFiltersFax  {
    readonly type = SAVE_FILTERS_FAX;
    constructor(public payload: Array<Filter>) { }
}

export class SaveSelectedFilterFax  {
    readonly type = SAVE_SELECTED_FILTERS_FAX;
    constructor(public payload: Filter) { }
}

export class SaveFiltersCourse {
    readonly type = SAVE_FILTERS_COURSE;
    constructor(public payload: Array<Filter>) { }
}

export class SaveSelectedFilterCourse {
    readonly type = SAVE_SELECTED_FILTERS_COURSE;
    constructor(public payload: Filter) { }
}

export class SaveFiltersYear  {
    readonly type = SAVE_FILTERS_YEAR;
    constructor(public payload: Array<Filter>) { }
}

export class SaveSelectedFilterYear {
    readonly type = SAVE_SELECTED_FILTERS_YEAR;
    constructor(public payload: Filter) { }
}

export class FilterByName {
    readonly type = FILTER_BY_NAME;
    constructor(public payload: string) { }
}


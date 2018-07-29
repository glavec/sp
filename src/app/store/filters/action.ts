export const FILTER_CHANGE = 'Filters [FILTER CHANGE]'
export const FILTER_APPLIED = 'Filters [FILTER APPLIED]'


export class filterChanged  {
    readonly type = FILTER_CHANGE;
    constructor() { }
}

export class filterAplied  {
    readonly type = FILTER_APPLIED;
    constructor() { }
}


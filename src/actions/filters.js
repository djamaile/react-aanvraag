export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT', 
    text
});

export const sortByBedrag = () => ({
    type: 'SORTBY_BEDRAG'
});

export const sortByDate = () => ({
    type: 'SORTBY_DATE'
});

export const setStartDate = (date) => ({
    type: 'SET_START_DATE', 
    date
});

export const setEndDate = (date) => ({
    type: 'SET_END_DATE', 
    date
});
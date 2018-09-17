import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test("Default values worden getest", () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test("bedrag moet geset worden", () => {
    const state = filtersReducer(undefined, {type: 'SORTBY_BEDRAG'});
    expect(state.sortBy).toBe('bedrag');
});

test("date moet geset worden", () => {
    const currentState = {
        text: '',
        startDate: undefined, 
        endDate: undefined, 
        sortBy: 'bedrag'
    };
    const action = {type: 'SORTBY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test("er moet gefilter worden op tekst", () => {
   const text = "Computer";
   const action = {
       type: "SET_TEXT", 
       text
   };
   const state = filtersReducer(undefined, action);
   expect(state.text).toBe(text);
});

test("er moet een start date kunnen zetten", () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE', 
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test("er moet een end date gezet kunnen worden", () => {
    const endDate = moment();
    const action = {
        type:  'SET_END_DATE', 
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});

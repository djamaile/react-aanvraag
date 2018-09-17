import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const aankopenReducerDefaultState = [];

const addAankoop = (
    {
        description = '',
        note = '',
        totaal = 0,
        aangemaakt = 0
    } = {}
) => ({
    type: 'ADD_AANKOOP',
    aankoop: {
        id: uuid(),
        description,
        note,
        totaal,
        aangemaakt
    }
});

const verwijderAankoop = ({ id } = {}) => ({
    type: 'VERWIJDER_AANKOOP',
    id
  });

const editAankoop = (id, update) => ({
    type: 'EDIT_AANKOOP', 
    id, 
    update
});


const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT', 
    text
});

const sortByBedrag = () => ({
    type: 'SORTBY_BEDRAG'
});

const sortByDate = () => ({
    type: 'SORTBY_DATE'
});

const setStartDate = (date) => ({
    type: 'SET_START_DATE', 
    date
});

const setEndDate = (date) => ({
    type: 'SET_END_DATE', 
    date
});

const aankopenReducer = (state = aankopenReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_AANKOOP': 
            return [
                ...state, 
                action.aankoop
            ];
        case 'VERWIJDER_AANKOOP':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_AANKOOP': 
            return state.map((aankoop) => {
                if(aankoop.id === action.id){
                    return {
                        ...aankoop, 
                        ...action.update
                    };
                }else{
                    return aankoop;
                }
            });
        default: 
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
    case 'SET_TEXT': 
        return {
            ...state,
            text: action.text
        };
    case 'SORTBY_BEDRAG': 
        return {
            ...state, 
            sortBy: 'bedrag'
        }
    case 'SORTBY_DATE': 
        return {
            ...state, 
            sortBy: 'date'
        }
    case 'SET_START_DATE': 
        return{
            ...state,
            startDate: action.date
        };
    case 'SET_END_DATE': 
        return{
            ...state,
            endDate: action.date
        };
        default: 
            return state;
    }
};

//get aankopen
const getAankopen = (aankopen, {text, sortBy, startDate, endDate}) => {
    return aankopen.filter((aankoop) => {
        const startDateMatch = typeof startDate !== 'number' || aankoop.aangemaakt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || endDate.aangemaakt <= endDate;
        const textMatch = aankoop.description.toLowerCase().includes(text.toLowerCase()); 

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.aangemaakt < b.aangemaakt ? 1 : -1;
        }else if(sortBy === 'bedrag'){
            return a.totaal < b.totaal ? 1 : -1;
        }
    });
};

//store 
const store = createStore(
    combineReducers({
        aankopen: aankopenReducer, 
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const alleAankopen = getAankopen(state.aankopen, state.filters);
    console.log(alleAankopen);
});

const aankoop1 = store.dispatch(addAankoop({description: 'Huur', totaal: 200, aangemaakt: -21000}));
const aankoop2 = store.dispatch(addAankoop({description: 'Koffie', totaal: 10, aangemaakt: -1000}));

//store.dispatch(verwijderAankoop({id: aankoop1.aankoop.id}));
//store.dispatch(editAankoop(aankoop2.aankoop.id, {totaal: 500}));
//store.dispatch(setTextFilter('Huur'));
store.dispatch(sortByBedrag());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(200));


const demoState = {
    aankopen: [{
        id: 'price',
        beschrijving: 'Feb',
        note: 'hallo', 
        totaal: 70, 
        aangemaakt: 0
    }], 
    filters: {
        text: 'huur', 
        sortBy: 'date', //date of bedrag
        startDate: undefined, 
        endDate: undefined
    }
};
import {createStore, combineReducers} from 'redux';
import aankopenReducer from '../reducers/aankopen';
import filtersReducer from '../reducers/filters';

export default () => {
    //store 
    const store = createStore(
        combineReducers({
            aankopen: aankopenReducer, 
            filters: filtersReducer
        }), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

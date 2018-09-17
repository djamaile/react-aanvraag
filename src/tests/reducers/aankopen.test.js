import aankopenReducer from '../../reducers/aankopen';
import dummyData from '../fixtures/dummydata';

test("Default state moet getest worden", () => {
    const state = aankopenReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test("kan een aankoop verwijderen", () => {
    const action = {
        type: 'VERWIJDER_AANKOOP', 
        id: dummyData[1].id
    }
    const state = aankopenReducer(dummyData, action);
    expect(state).toEqual([dummyData[0], dummyData[2]]);
});

test("kan een aankoop niet verwijderen als id niet bestaat", () => {
    const action = {
        type: 'VERWIJDER_AANKOOP', 
        id: '-1'
    }
    const state = aankopenReducer(dummyData, action);
    expect(state).toEqual([dummyData[0],dummyData[1], dummyData[2]]);
});

test("Kan een aankoop toevoegen", () => {
    const aankoop =  {
        id: '4',
        description: 'Macbook',
        note: '',
        totaal: 1500, 
        aangemaakt: 5000 
    }
    const action = {
        type: 'ADD_AANKOOP',
        aankoop
    }
    const state = aankopenReducer(dummyData, action);
    expect(state).toEqual([...dummyData, aankoop]);
});
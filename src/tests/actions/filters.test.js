import {setTextFilter, sortByBedrag, sortByDate, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test("Er moet getest worden of er wel een filter is", () => {
    const action = setTextFilter('Computer');
    expect(action).toEqual({
        type: 'SET_TEXT', 
        text: 'Computer'
    });
});

test("Er moet getest worden of filter een default value krijgt", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT', 
        text: ''
    });
}); 

test("Er moet getest worden of filter sortByBedrag binnen krijgt", () => {
    const action = sortByBedrag();
    expect(action).toEqual({
        type: 'SORTBY_BEDRAG'
    })
});

test("Er mmoet getest worden filter sortyByDate binnen krijgt", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORTBY_DATE'
    })
})

test("Er moet een start datum komen", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE', 
        date: moment(0)
    });
});

test("Er moet een eind datum komen", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE', 
        date: moment(0)
    });
});
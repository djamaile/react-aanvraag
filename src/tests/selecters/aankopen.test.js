import selectAankopen from '../../selecters/aankopen';
import dummyData from '../fixtures/dummydata';
import moment from 'moment';

const aankopen = [{
    id: '1',
    description: 'Computer', 
    note: 'Merk HP', 
    totaal: '750', 
    aangemaakt: moment(0).valueOf()
},
{
    id: '2',
    description: 'Huur', 
    note: 'Wassenaar', 
    totaal: '2500', 
    aangemaakt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'Playstation', 
    note: '', 
    totaal: '400', 
    aangemaakt: moment(0).add(4, 'days').valueOf()
}];

test("Moet gefilter worden op text", () => {
    const filters = {
        text: 'Computer', 
        sortBy: 'date', 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectAankopen(aankopen, filters);
    expect(result).toEqual([aankopen[0]]);
});

test("Er moet gefilter worden op start date", () => {
    const filters = {
        text: '', 
        sortBy: 'date', 
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectAankopen(aankopen, filters);
    expect(result).toEqual([aankopen[2], aankopen[0]]);
});

test("Er moet gefilter worden op end date", () => {
    const filters = {
        text: '', 
        sortBy: 'date', 
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectAankopen(aankopen, filters);
    expect(result).toEqual([aankopen[0], aankopen[1]]);
});

test("Er moet gefilter worden op bedrag", () => {
    const filters = {
        text: '', 
        sortBy: 'bedrag', 
        startDate: undefined,
        endDate: undefined
    };
    const result = selectAankopen(aankopen, filters);
    expect(result).toEqual([aankopen[0], aankopen[2], aankopen[1]]);
});

test("Er moet gefilter worden op date", () => {
    const filters = {
        text: '', 
        sortBy: 'date', 
        startDate: undefined,
        endDate: undefined
    }
    const result = selectAankopen(aankopen, filters);
    expect(result).toEqual([aankopen[2], aankopen[0], aankopen[1]]);
});
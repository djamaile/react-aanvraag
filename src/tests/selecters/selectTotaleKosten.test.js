import selectTotaleKosten from '../../selecters/selectTotaleKosten';
import aanvragen from '../fixtures/dummydata';
import moment from 'moment';

test("15 euro moet uitkomen", () => {
    const result = selectTotaleKosten(aanvragen);
    var bedrag = 15;
    expect(result).toEqual(bedrag);
});

test("Moet 5 euro uitkomen", () => {
    const aankoop = [{
        id: '1',
        description: 'Computer', 
        note: 'Merk HP', 
        totaal: 5, 
        aangemaakt: moment(0).valueOf()
    }];
    const result = selectTotaleKosten(aankoop);
    var bedrag = 5;
    expect(result).toEqual(bedrag);
});

test("Nul euro moet uitkomen", () => {
    const result = selectTotaleKosten();
    var bedrag = 0; 
    expect(result).toBe(bedrag); 
});
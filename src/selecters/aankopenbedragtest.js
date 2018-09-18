import selectTotaalKosten from './selectTotaleKosten';

const aankopen = [{ 
    id: '1',
    description: 'Computer', 
    note: 'Merk HP', 
    totaal: 4, 
    aangemaakt: moment(0).valueOf()
    },
    {
    id: '2',
    description: 'Huur', 
    note: 'Wassenaar', 
    totaal: 9, 
    aangemaakt: moment(0).subtract(4, 'days').valueOf()
    },
    {
    id: '3',
    description: 'Playstation', 
    note: '', 
    totaal: 16, 
    aangemaakt: moment(0).add(4, 'days').valueOf()
}];

const totaal = selectTotaalKosten(aankopen);
console.log(totaal);
import moment from 'moment';

export default  [{
    id: '1',
    description: 'Computer', 
    note: 'Merk HP', 
    totaal: 5, 
    aangemaakt: moment(0).valueOf()
},
{
    id: '2',
    description: 'Huur', 
    note: 'Wassenaar', 
    totaal: 5, 
    aangemaakt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'Playstation', 
    note: '', 
    totaal: 5, 
    aangemaakt: moment(0).add(4, 'days').valueOf()
}];




import moment from 'moment';

//get aankopen
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const aangemaaktMoment = moment(expense.aangemaakt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(aangemaaktMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(aangemaaktMoment, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.aangemaakt < b.aangemaakt ? 1 : -1;
      } else if (sortBy === 'bedrag') {
        return a.totaal < b.totaal ? 1 : -1;
      }
    });
  };
  
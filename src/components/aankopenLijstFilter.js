import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByBedrag, sortByDate, setStartDate, setEndDate} from '../actions/filters';

class AankopenLijstFilter extends React.Component{
    state = {
        kalenderFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (kalenderFocused) => {
        this.setState(() => ({kalenderFocused}));
    };
    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value));
                    console.log(e.target.value);
                }}/>
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate());
                    } else if (e.target.value === 'bedrag') {
                        this.props.dispatch(sortByBedrag());
                    }
                    }}
                >
                    <option value="date">Datum</option>
                    <option value="bedrag">Bedrag</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.kalenderFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    //deze twee props horen erbij anders krijg error warnings 
                    startDateId="startDateId"
                    endDateId="endDateId"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(AankopenLijstFilter);
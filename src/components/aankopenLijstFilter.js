import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByBedrag, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '../../node_modules/@material-ui/core';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
  });

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
        const { classes } = this.props;
        return (
            <div>
                <TextField
                    id="standard-name"
                    label="Zoek aanvraag"
                    className={classes.textField}
                    value={this.props.filters.text}
                    onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                    console.log(e.target.value);
                    }}
                    margin="normal"
                />
                <FormControl className={classes.formControl} >
                   
                    <Select
                        value={this.props.filters.sortBye}
                        onChange={(e) => {
                            if (e.target.value === 'date') {
                                this.props.dispatch(sortByDate());
                            } else if (e.target.value === 'bedrag') {
                                this.props.dispatch(sortByBedrag());
                            }
                        }}
                        name="age"
                        className={classes.selectEmpty}
                         >
                        <MenuItem value="date"r>
                        Kies een filter
                        </MenuItem>
                        <MenuItem value="date">date</MenuItem>
                        <MenuItem value="bedrag">bedrag</MenuItem>
                    </Select>
                    <FormHelperText>Kies een filter</FormHelperText>
                </FormControl>
                {/*<DateRangePicker
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
                />*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const styledClass = withStyles(styles)(AankopenLijstFilter);

export default connect(mapStateToProps)(styledClass);
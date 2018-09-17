import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

class AanvraagFormulier extends React.Component{
    constructor(props) {
        super(props);   
        this.state = {
          description: props.aankoop ? props.aankoop.description : '',
          note: props.aankoop ? props.aankoop.note : '',
          totaal: props.aankoop ? props.aankoop.totaal.toString() : '',
          aangemaakt: props.aankoop ? moment(props.aankoop.aangemaakt) : moment(),
          calendarFocused: false,
          error: ''
        };
      }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };
    onNoteChange = (e) => {
        const note = e.target.value; 
        this.setState(() => ({note}));
    };
    onBedragChange = (e) =>{
        const totaal = e.target.value;
        if(!totaal || totaal.match(/^\d{1,}(.\d{0,2})?$/)){
            this.setState(() => ({totaal}));
        }
    };
    onDateChange = (aangemaakt) => {
        if(aangemaakt){
            this.setState(() => ({aangemaakt}));
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({kalenderFocused: focused}));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.totaal){
            this.setState(() => ({error: "De verplichte velden moet ingevuld worden"}));
        }else{
            this.setState(() => ({erorr: ""}));
            this.props.onSubmit({
                description: this.state.description,
                totaal: parseFloat(this.state.totaal, 10),
                aangemaakt: this.state.aangemaakt.valueOf(),
                note: this.state.note
            });
        }
    };
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}> 
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="description" 
                        autoFocus 
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text" 
                        name="totaal"
                        placeholder="totaal" 
                        value={this.state.totaal}
                        onChange={this.onBedragChange}
                    />
                    <SingleDatePicker
                        date={this.state.aangemaakt}
                        onDateChange={this.onDateChange}
                        focused={this.state.kalenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea 
                        placeholder="Voeg een notitie toe" 
                        name="note"
                        onChange={this.onNoteChange}
                    />
                    <button>Verstuur aanvraag</button>
                </form>
            </div>
        );
    }
}

export default AanvraagFormulier;
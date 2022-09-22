import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker  } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';



class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate())
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount())
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={({ startDate, endDate }) => {
                        this.props.dispatch(setStartDate(startDate));
                        this.props.dispatch(setEndDate(endDate));
                    }}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={(calendarFocused) => {
                        this.setState(() => ({ calendarFocused }))
                    }}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}

                />
            </div>
        )
    }
    }


// const ExpenseListFilter = (props) => (
//     <div>
//         <input type='text' value={props.filters.text} onChange={(e)=>{
//             props.dispatch(setTextFilter(e.target.value));
//             console.log(e.target.value);
//         }}/>
//         <select 
//             value={props.filters.sortBy}
//             onChange={(e)=>{
//                 if (e.target.value === 'date') {
//                     props.dispatch(sortByDate())
//                 } else if (e.target.value === 'amount') {
//                     props.dispatch(sortByAmount());
//                 } else {
//                     throw "select search mode wrong";
//                 }
//             }}
//         >
//             <option value="date" > Date </option>
//             <option value="amount" >Amount</option>
//         </select>

//     </div>
// ); 

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};


export default connect(mapStateToProps)(ExpenseListFilter);
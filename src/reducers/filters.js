import moment from 'moment';
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // enumerated type: date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
// Filter Reducer
// text => '', sortBy => 'date', startDate => undefined, endDate =>undefined
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            // console.log('SET_TEXT_FILTER');
            return {    
                ...state,
                text: action.text
                };
        case 'SORT_BY_AMOUNT':
            return {    
                ...state,
                sortBy: 'amount'
                };
        case 'SORT_BY_DATE':
            return {    
                ...state,
                sortBy: 'date'
                };
        case 'SET_START_DATE':
            return {    
                ...state,
                startDate: action.date
        };
        case 'SET_END_DATE':
            return {    
                ...state,
                endDate: action.date
        };
                
        default:
            return state;
    }
};

export default filtersReducer;

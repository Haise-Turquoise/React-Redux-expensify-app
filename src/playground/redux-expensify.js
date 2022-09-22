import { createStore, combineReducers } from "redux";

//original

//ADD_EXPENSE
const addExpense = (
    { 
        description = '',
        note = '',
        amount = 0,
        createdAt = 0 } = {}
    ) => ({ 
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
}) 

//REMOVE_EXPENSE
const removeExpense = (
    { id } = {}) => ({ 
    type: 'REMOVE_EXPENSE',
    id
}) 


//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text='') => ({
    type: 'SET_TEXT_FILTER',
    text: text
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});
//SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})
//SET_END_DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})
// Expensese Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];//state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            return state.filter((elm)=>(elm.id != action.id));
        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                if (expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // enumerated type: date or amount
    startDate: undefined,
    endDate: undefined
};
// Filter Reducer
// text => '', sortBy => 'date', startDate => undefined, endDate =>undefined
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
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

// Get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    // console.log('sortBy: ', sortBy);
    return expenses.filter( (expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // console.log(expense.description, ': ');
        // console.log('expense.createdAt: ',expense.createdAt);
        // console.log('startDate: ',startDate);
        // console.log('startDateMatch: ',startDateMatch);
        const endDateMatch = typeof endDate != 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=> {
        switch (sortBy) {
            case 'date':
                return a.createdAt < b.createdAt ? 1 : -1;
            case 'amount':
                return a.amount < b.amount ? 1 : -1;
            // if (sortBy === 'date') {
            //     return a.createdAt < b.createdAt ? 1 : -1;
            // }
            // if (sortBy === 'amount') {
            //     return -(a.amount - b.amount);
            // }
        }
    });
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe( ()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(sortByDate());
const expenseOne =
    store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo =
    store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
const expenseThree =
    store.dispatch(addExpense({ description: 'Tea', amount: 200, createdAt: 1000 }));

// //store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500} ));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());

// store.dispatch(setTextFilter('FFE'));
// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
// // store.dispatch(setEndDate(1250));
//  store.dispatch(setEndDate(999));



const demoState = {
    expenses: [
        {
        id: 'poij',
        description: 'January Rent',
        note: 'This is was the final payment for that address',
        amount: 54500,
        createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'date', // enumerated type: date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 24
};

// console.log({
//     age: 27,
//     ...user,
//     location: 'Philadelphia',
// });
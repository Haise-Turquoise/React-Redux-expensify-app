// Expensese Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];//state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            // console.log('REMOVE_EXPENSE');
            // console.log('each id: ', state);//.expenses
            // console.log('action.id: ', action.id);
            return state.filter(({ id }) => (id !== action.id));
            //return state.filter(({ id }) => (id !== action.id));
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
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

export default expensesReducer;
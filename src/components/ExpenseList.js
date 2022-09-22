import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem  from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { removeExpense } from "../actions/expenses";

export const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                }
            ))
        }
    </div>
);

// key = {expense.id}
//             amount = {expense.amount}
//             description = {expense.description}
//             createdAt = {expense.createdAt}


const mapStateToProps = (state)=> {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

// const ConnectedExpenseList = connect(
//     (state)=> {
//         return {
//             expenses: state.expenses
//         };
//     }
// )(ExpenseList);

// export default ConnectedExpenseList ;

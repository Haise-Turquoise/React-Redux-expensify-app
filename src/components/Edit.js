import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

// const EditPage = (props) => {
//     return (
//       <div>
//         <ExpenseForm
//           expense={props.expense}
//           onSubmit={(expense) => {
//             props.dispatch(editExpense(props.expense.id, expense));
//             props.history.push('/');
//           }}
//         />
//         <button onClick={() => {
//           props.dispatch(removeExpense({ id: props.expense.id }));
//           props.history.push('/');
//         }}>Remove</button>
//       </div>
//     );
//   };

//   const mapStateToProps = (state, props) => {
//     return {
//       expense: state.expenses.find((expense) => expense.id === props.match.params.id)
//     };
//   };

//   export default connect(mapStateToProps)(EditPage);

const EditPage = (props) => {
    console.log('props: ');
    console.log(props);
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                // console.log('id at onClick(parameter of ExpenseListItem in ExpenseListItem):', id);
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    // const ret = 
    // console.log('props.match.params.id: '+props.match.params.id);
    // console.log('expense.id: '+ret.id);
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditPage);
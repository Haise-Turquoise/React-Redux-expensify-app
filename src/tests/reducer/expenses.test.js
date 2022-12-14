import expensesReducer from "../../reducers/expenses";
import moment from "moment";

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt:  moment(0).add(4, 'days').valueOf()
}];


test("should set up default expense values", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
    }
);

test("should remove expense by id", () => {
    const action = { type: "REMOVE_EXPENSE", id: "2" };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
}
);

test("should not remove expenses if id not found", () => {
    const action = { type: "REMOVE_EXPENSE", id: "-1" };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
}); 

test("should add an expense", () => {
    const expense = {
        id: "4",
        description: "Water Bill",
        note: "",
        amount: 4500,
        createdAt: 0
    };
    const action = { type: "ADD_EXPENSE", expense };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
    const amount = 122000;
    const action = { type: "EDIT_EXPENSE", id: "2", updates: { amount } };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test("should not edit expense if expense not found", () => {
    const amount = 122000;
    const action = { type: "EDIT_EXPENSE", id: "-1", updates: { amount } };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});



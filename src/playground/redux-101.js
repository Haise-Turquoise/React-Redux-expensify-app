import {createStore} from 'redux';

const add = ({a,b}) => {
    return a+b;
}

console.log(add({a: 1, b: 12}));

const incrementCount = ({diff = 1} = {}) => ({
    type: 'INCREMENT',
    diff: diff  
});

const decrementCount = ({diff = 1} = {})=> ({
    type: 'DECREMENT',
    diff: diff
})

const setCount = ({count})=> ({
    type: 'SET',
    count: count
})

const resetCount = ()=> ({
    type: 'RESET'
})

// Reducers

const countReducer = (state = { count: 10 }, action)=> {
    switch (action.type) {
        case 'INCREMENT':
            const diffP = typeof action.diff === 'number' ? action.diff : 1;
            return {
                count: state.count + diffP
            };
        case 'DECREMENT':
            const diffM = typeof action.diff === 'number' ? action.diff : 1;
            return {
                count: state.count - diffM
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default: 
            return state;
    }
}

const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
    console.log("Changed data: ", store.getState() );
})



//Action


// store.dispatch({
//     type: 'INCREMENT',
//     diff: 5
// });

store.dispatch(incrementCount({ diff: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount());

store.dispatch(decrementCount());
// unsubscribe();

store.dispatch(decrementCount({ diff: 11 }));
// console.log('+1: ', store.getState() );
// store.dispatch({
//     type: 'INCREMENT'
// });





// store.dispatch({
//     type: 'DECREMENT',
//     diff: 10
// });

// console.log('-1: ', store.getState() );


// console.log('归零: ', store.getState() );

store.dispatch(setCount({count: 105}));
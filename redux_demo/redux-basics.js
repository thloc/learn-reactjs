const redux = require('redux');
const createStore = redux.createStore;

const initState = {
    counter: 0
}

// Reducer
const rootReducer = (stage = initState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...stage,
            counter: stage.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...stage,
            counter: stage.counter + action.value
        };
    }
    return stage;
}

// Store
const store = createStore(rootReducer);
console.log('aaa', store.getState());

// Subscription
store.subscribe(() => {
    console.log('Subscription', store.getState());
});

//  Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});

console.log(store.getState());

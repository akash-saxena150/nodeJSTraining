const Redux = require('redux')
let createStore = Redux.createStore;

const initialState = {counter: 0}
//reducer
const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case ('INCREMENT_COUNTER'):
            return {counter: ++state.counter}
        case ('DECREMENT_COUNTER'):
            return {counter: state.counter--}
        case ('STEPUP'):
            return {counter: (state.counter += action.count)}
        case ('STEPDN'):
            return {counter: (state.counter -= action.count)}
    }
    return state;
}

//store
const store = createStore(rootReducer);
console.log("First state",store.getState())

//subscription
store.subscribe(()=>{
    console.log(store.getState());
})

//action
store.dispatch({type: 'INCREMENT_COUNTER'});
store.dispatch({type: 'DECREMENT_COUNTER'});
store.dispatch({type: 'STEPUP', count: 5});
store.dispatch({type: 'STEPDN', count: 4});



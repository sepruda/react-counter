import React from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
        count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE":
        return {count: state.count+1}
        case "DECREASE":
        return {count: state.count-1}
        default:
        return state;
    }
}

const store = createStore(reducer);

const App = (props) => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    
)};

export default App
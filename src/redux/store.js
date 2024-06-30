import { compose, createStore } from 'redux';
import reducer from './reducer';

// Adding Dev tool kit
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose;

const store = createStore(reducer, composeEnhancers);

export default store;

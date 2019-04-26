import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const defaultState = {};

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ladderReducer from './ladderReducer';

const rootReducer = combineReducers({
    ladderReducer,
    routing: routerReducer
});

export default rootReducer;
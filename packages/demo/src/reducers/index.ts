import {combineReducers} from 'redux';

import {reducer} from './reducer';

const reducers = combineReducers({
    demo: reducer,
});

export {reducers};

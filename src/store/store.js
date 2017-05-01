import { createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import employeeFormReducer from './reducers/employeeFormReducer';
import employeeReducer from './reducers/employeeReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    employeeForm: employeeFormReducer,
    employees: employeeReducer
})

const createStoreWithMiddleware = applyMiddleware(thunk, createLogger());

let store = createStore(rootReducer, createStoreWithMiddleware)


export default store;
import {combineReducers, createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import projectReducer from './reducers/projectReducer';
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
    projects: projectReducer,
    auth: authReducer
})


const configurestore = () => {
    return createStore(rootReducer, {}, applyMiddleware(reduxThunk))
}

export default configurestore;
import {combineReducers, createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import projectReducer from './reducers/projectReducer';

const rootReducer = combineReducers({
    projects: projectReducer
})


const configurestore = () => {
    return createStore(rootReducer, {}, applyMiddleware(reduxThunk))
}

export default configurestore;
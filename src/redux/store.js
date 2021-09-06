import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import {rootReducers} from './modules';

const configureStore=(reducers={},preloadState={},middlewars=[])=>createStore(
     combineReducers({
         ...rootReducers,
         ...reducers
     }),
    preloadState,
    compose(
        applyMiddleware(
        ...middlewars,
        reduxLogger,
        thunk),
         window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()

)  


);

export default configureStore;
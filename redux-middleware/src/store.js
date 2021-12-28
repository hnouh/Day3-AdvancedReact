import { createStore, combineReducers, applyMiddleware } from "redux";
import counter from './reducers/counter'
import posts from './reducers/posts'
// import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { myFirstMiddleWare,mySeconMiddleWare,myThirdMiddleWare } from "./middleware/middleware";


const reducers = combineReducers({ counter,posts });
const store = createStore(reducers,applyMiddleware(myFirstMiddleWare,mySeconMiddleWare,myThirdMiddleWare,thunk,logger));
// const store = createStore(reducers,composeWithDevTools(),applyMiddleware(myLogger,thirdMiddleware,logger,thunk));
export default store;

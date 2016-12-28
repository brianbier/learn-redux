import { createStore, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory} from 'react-router';


//import the root reducers
import rootReducer from './reducers/index';

//default data
import comments from './data/comments';
import posts from './data/posts';


//Create an object for the default data using es6 syntax
const defaultState = {
  posts,
  comments
}

const enhancers = compose(
  window.devToolsExtension? window.devToolsExtension() : f => f
);

//Create a store 
//Takes the root reducer is how we will interface with the store and the default state
const store = createStore(rootReducer,defaultState,enhancers);

//To keep track of where I am and include the store.
export const history = syncHistoryWithStore(browserHistory,store);


// Hot reloading rexdus reducers with webpack

if(module.hot){
  module.hot.accept('./reducers',()=>{
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer)
  })
}

export default store;

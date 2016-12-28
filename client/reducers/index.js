import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';


//we combine our post, comments and the changes of our url so we need to pass routing
const rootReducer = combineReducers({posts,comments,routing: routerReducer});

export default rootReducer;
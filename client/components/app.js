import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}



//connect take two functions
// MapStatetoProps: Takes the state which is our post and comments
// MapDispatchTopProps: which are our action creators
// You can immidiately connect it to Main and it will add all the props and state data and all action creators to our props aswell.
const App = connect(mapStateToProps,mapDispatchToProps)(Main)


export default App;


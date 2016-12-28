// a reducers takes in two things:
// 1. Action(information on what happened)
// 2. copy of current state(store)
// 3. You can only have one reducer that combines all reducers

//Handles one comment
function postComments(state=[],action){
  switch(action.type){
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state,{
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
    // we need to return the new state without the deleted comment
      return [
        /// from the start to the one we want to delete
        ...state.slice(0, action.i),
        /// everthing after the deleted one to the end
        ...state.slice(action.i + 1)
      ]

    default:
      return state;

  }
}


//why declare the state as empty array because its not declared the first time.
function comments(state=[],action){
  //alternative to a switch statement
  if(typeof action.postId !== 'undefined'){
    return {
      // take current state
      ...state,
      // overwrite this post with new one
      [action.postId]: postComments(state[action.postId],action)
    }
  }
  return state;
}

export default comments;
// a reducers takes in two things:
// 1. Action(information on what happened)
// 2. copy of current state(store)
// 3. You can only have one reducer that combines all reducers

//why declare the state as empty array because its not declared the first time.
function posts(state=[],action){

  switch(action.type){
  case 'INCREMENT_LIKES':
  const i = action.index;
    return [
      ...state.slice(0,i),// before the one we are updating
      {...state[i],likes: state[i].likes + 1}, // This is creating a copy and updating the likes
      ...state.slice(i+1), //after the one we are updating
    ]
  default:
    return state;
    

  }
}

export default posts;
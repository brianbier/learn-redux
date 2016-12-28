// Actions are just objects that have a type which is the name and index
// They are action creator because the action is inside the return object

// action: increment like
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index 
  }
}

//action: Add Comment
export function addComment(postId,author,comment){
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// action: Remove Comment
export function removeComment(postId,i){
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}
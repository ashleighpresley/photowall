//remove post
export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index,
  };
}

//adding posts
export function addPost(post) {
  return {
    type: "ADD_POST",
    post,
  };
}

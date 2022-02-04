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

//adding comments
export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId,
  };
}

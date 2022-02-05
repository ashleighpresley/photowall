import { database } from "../database/config";

//add posts to database
export function startAddingPost(post) {
  return (dispatch) => {
    return database
      .ref("posts")
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//load posts from database
export function startLoadingPost(post) {
  return (dispatch) => {
    return database
      .ref("posts")
      .once("value")
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((childSnapshot) => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPosts(posts));
      });
  };
}

export function startRemovingPost(index, id) {
  return (dispatch) => {
    return database
      .ref(`posts/${id}`)
      .remove()
      .then(() => {
        dispatch(removePost(index));
      });
  };
}

export function loadPosts(posts) {
  return {
    type: "LOAD_POSTS",
    posts,
  };
}

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

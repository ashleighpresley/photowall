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

//add comments to database
export function startAddingComment(comment, id) {
  return (dispatch) => {
    return database
      .ref(`comments/${id}`)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, id));
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
      })
      .catch((error) => {
        console.log(error);
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
      })
      .catch((error) => {
        console.log(error);
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

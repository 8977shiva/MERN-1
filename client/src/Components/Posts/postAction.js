import axios from "axios";
import { actionsType } from "../../redux/actions";

const heroKuUrl = "https://mernm-1.herokuapp.com";
const url="http://localhost:5000"

export const getPost = () => {

  return (dispatch) => {
    axios
        .get(`${url}/posts`)
      .then((response) => {
        dispatch({
          type: actionsType.GET_POSTS,
          post: response.data
        });
        console.log("fetch successfully");
      })
      .catch((error) => console.log(error.response));
  };
};

export const createPost = (newpost) => {
  return (dispatch) => {
    axios
      .post(`${url}/posts/creates`, newpost)
      .then((response) => {
        dispatch(getPost());
        //Todo:toast message
        console.log(response);
      })
      .catch((error) => console.log(error.response));
  };
};

export const selectPost = (post) => {
  return (dispatch) => {
    dispatch({
      type: actionsType.SET_POST_ID,
      post: post
    });
  };
};

export const updatePost = (id, post) => {
  return (dispatch) => {
    axios
      .patch(`${url}/posts/${id}`, post)
      .then((response) => {
        dispatch(getPost());
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
};

export const deleteSelectedPost = (id) => {
    console.log("in func")
  return (dispatch) => {
        console.log("in return")
    axios
      .delete(`${url}/posts/${id}`)
      .then((response) => {
        dispatch(getPost());
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
};

export const clearSelectedPost = () => {
  return (dispatch) => {
    dispatch({
      type: actionsType.SET_POST_ID,
      post: null
    });
  };
};


export const likePost = (id) => {
    console.log("in fun");
    return (dispatch) => {
        console.log("in return");
        axios
            .patch(`${url}/posts/like/${id}`)
            .then((response) => {
                dispatch(getPost());
                console.log(response);
            })
            .catch((error) => console.log(error));
    };
};

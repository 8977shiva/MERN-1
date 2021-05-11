import axios from "axios";
import { actionsType } from "../../redux/actions";

const url = "http://localhost:5000";

export const getPost = () => {
  return (dispatch) => {
    axios
      .get(`${url}/posts`)
      .then((response) => {
        dispatch({
          type: actionsType.GET_POSTS,
          post: response.data,
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

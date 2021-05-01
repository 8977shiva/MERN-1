import axios from "axios";
import { actionsType } from "../../redux/actions";

const url = "http://localhost:5000/posts";

export const getPost = () => {
  return (dispatch) => {
    axios
      .get(url)
      .then((respones) => {
        dispatch({
          type: actionsType.GET_POSTS,
          data: respones.data,
        });
      })
      .catch((error) => console.log(error));
  };
};

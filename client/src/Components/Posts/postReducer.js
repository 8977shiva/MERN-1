import { actionsType } from "../../redux/actions";

const initialState = {
  post: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.tye) {
    case actionsType.GET_POSTS:
      return { ...state, post: action.post };
    default:
      return state;
  }
};

export default postReducer;

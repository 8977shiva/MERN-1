import { actionsType } from "../../redux/actions";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_POSTS:
      return { ...state, posts: action.post };
    default:
      return state;
  }
};

export default postReducer;

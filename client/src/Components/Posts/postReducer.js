import { actionsType } from "../../redux/actions";

const initialState = {
  posts: [],
  selectedPost: null,
};

const postReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionsType.SET_POST_ID:
      return { ...state, selectedPost: action.post };
    case actionsType.GET_POSTS:
      return { ...state, posts: action.post };
    default:
      return state;
  }
};

export default postReducer;

import {ADD_POST, GET_POSTS, GET_POST, POST_LOADING, DELETE_POST} from '../actions/types';
const initialState = {
  posts: [],
  post: {},
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
    return {
      ...state,
     loading: true
    }
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_POST:
    return {
      ...state,
      posts: state.posts.filter(post => post._id !== action.payload)
    }
    case GET_POSTS:
    return {
      ...state,
      loading: false,
      posts: action.payload
    }
    case GET_POST:
    return {
      ...state,
      loading: false,
      post: action.payload
    }
    
    default:
      return state;
  }
}
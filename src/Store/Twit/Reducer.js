import {
  FIND_TWEET_BY_ID_REQUEST,
  LIKE_TWEET_REQUEST,
  RTWEET_REQUEST,
  TWEET_CREATE_REQUEST,
  TWEET_DELETE_REQUEST,
  USER_LIKE_TWEET_REQUEST,
  TWEET_CREATE_FAILURE,
  TWEET_DELETE_FAILURE,
  USER_LIKE_TWEET_FAILURE,
  LIKE_TWEET_FAILURE,
  RTWEET_FAILURE,
  FIND_TWEET_BY_ID_FAILURE,
  TWEET_CREATE_SUCCESS,
  GET_ALL_TWEETS_SUCCESS,
  GET_USERS_TWEET_SUCCESS,
  USER_LIKE_TWEET_SUCCESS,
  LIKE_TWEET_SUCCESS,
  TWEET_DELETE_SUCCESS,
  RTWEET_SUCCESS,
  FIND_TWEET_BY_ID_SUCCESS,
  REPLY_TWEET_SUCCESS,
} from "./ActionType";

const initialState = {
  loading: false,
  data: null,
  error: null,
  twits: [],
  twit: null,
};

export const twitReducer = (state = initialState, action) => {
  switch (action.type) {
    case TWEET_CREATE_REQUEST:
    case TWEET_DELETE_REQUEST:
    case USER_LIKE_TWEET_REQUEST:
    case LIKE_TWEET_REQUEST:
    case RTWEET_REQUEST:
    case FIND_TWEET_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };

    case TWEET_CREATE_FAILURE:
    case TWEET_DELETE_FAILURE:
    case USER_LIKE_TWEET_FAILURE:
    case LIKE_TWEET_FAILURE:
    case RTWEET_FAILURE:
    case FIND_TWEET_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case TWEET_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        twits: [action.payload, ...state.twits],
      };

    case GET_ALL_TWEETS_SUCCESS:
    case GET_USERS_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        twits: action.payload,
      };

    case USER_LIKE_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        likedTwits: action.payload,
      };

    case LIKE_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        like: action.payload,
      };

    case TWEET_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        twits: state.twits.filter((twit) => twit.id !== action.payload),
      };

    case RTWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        retwit: action.payload,
      };

    case FIND_TWEET_BY_ID_SUCCESS:
    case REPLY_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        twit: action.payload,
      };

    default:
      return state;
  }
};

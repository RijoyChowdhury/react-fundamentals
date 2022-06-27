import { map, uniq } from 'lodash';
import jsonPlaceholderApi from '../api/JSONPlaceholder';
// import { memoize } from 'lodash';

// call actionCreator inside another actionCreator
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const ids = uniq(map(getState().posts, (post) => post.userId));
  ids.forEach((id) => {
    dispatch(fetchUser(id));
  });
};

export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const response = await jsonPlaceholderApi.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  };
};

export const fetchUser = (userId) => async (dispatch) => {
  const response = await jsonPlaceholderApi.get(`/users/${userId}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
};

// memoized version of the acton creator
// export const fetchUser = (userId) => (dispatch) => _fetchUser(userId, dispatch);

// // note: memoize takes only first arg into consideration
// // to override this use the second arg to memoize function (resolver function)
// // https://justinnoel.dev/2019/06/06/lodash-memoize-with-a-resolver/
// const _fetchUser = memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholderApi.get(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data,
//   });
// });

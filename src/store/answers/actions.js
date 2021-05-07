export const LOGIN = 'LOGIN';

export const fetchLogin = (userData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN, value: userData });
    } catch (e) {
      console.log(e);
    }
  };
};

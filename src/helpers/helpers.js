import { push } from 'connected-react-router';

export const ADD_STEP = 'ADD_STEP';
export const STEP_WIN = 'STEP_WIN';
export const addStep = (idPage) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_STEP, value: 1 });
      dispatch(push('/level' + idPage));
    } catch (e) {
      console.log(e);
    }
  };
};

export const winStep = (idPage) => {
  return async (dispatch) => {
    try {
      dispatch({ type: STEP_WIN, value: 20 });
    } catch (e) {
      console.log(e);
    }
  };
};

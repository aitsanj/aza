import { ADD_STEP, STEP_WIN } from '../../helpers/helpers';
import { CLOSE_MODAL, SHOW_MODAL } from './actions';

const initialState = {
  stepNumber: 0,
};

const constantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STEP:
      return { ...state, stepNumber: state.stepNumber + action.value };
    case STEP_WIN:
      return { ...state, stepNumber: action.value };
    default:
      return state;
  }
};

export default constantsReducer;

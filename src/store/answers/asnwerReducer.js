const initialState = {
  username: 'Детка',
  password: '21',
  answersErrorStatus: false,
  answersErrorMessage: '',
};

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default answerReducer;

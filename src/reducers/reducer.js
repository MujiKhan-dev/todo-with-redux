const initialState = {
  list: [],
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        list: [...state.list, action.payload],
      }
    default:
      return state;
  }
};

export default asyncReducer;
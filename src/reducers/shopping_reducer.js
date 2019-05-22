const shoppingReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SHOPPING":
      return [action.shopping, ...state];
    case "REMOVE_SHOPPING":
      return [
        ...state.slice(0, action.shoppingIndex),
        ...state.slice(action.shoppingIndex + 1)
      ];
    default:
      return state;
  }
};

export default shoppingReducer;

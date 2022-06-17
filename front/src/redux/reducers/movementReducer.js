function movementReducer(state = [], action) {
  switch (action.type) {
    case "STORE_MOVEMENT":
      return action.payload;
    case "CREATE":
      return [action.payload, ...state];
    case "REMOVE":
      break;
    default:
      return state;
  }
}

export default movementReducer;

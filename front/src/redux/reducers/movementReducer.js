import update from "react-addons-update";
function movementReducer(state = [], action) {
  switch (action.type) {
    case "STORE_MOVEMENT":
      return action.payload;
    case "CREATE":
      return [action.payload, ...state];
    case "REMOVE":
      console.log(action.payload.id);
      return state.filter((item) => item.id !== action.payload.id);

    case "UPDATE":
      return state;
    default:
      return state;
  }
}

export default movementReducer;

import update from "react-addons-update";
function movementReducer(state = [], action) {
  switch (action.type) {
    case "STORE_MOVEMENT":
      return action.payload;
    case "CREATE":
      return [action.payload, ...state];
    case "REMOVE":
      break;
    case "UPDATE":
      return update(state, {
        movements: {
          1: {
            text: { $set: action.payload },
          },
        },
      });
    default:
      return state;
  }
}

export default movementReducer;

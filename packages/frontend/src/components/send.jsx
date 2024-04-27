export const initialState = {
  selectedId: 0,
  message: "Hello",
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
        message: "",
      };
    }
    case "edited_message": {
      return {
        ...state,
        message: action.message,
      };
    }
    case "submit_message": {
      alert(`${action.email} ${action.message}`);
      return {
        ...state,
        message: "",
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

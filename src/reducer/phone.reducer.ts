import { PhoneAction } from "./phone.actions.creator";
import { actionTypes } from "./phone.actions.types";

export type PhoneState = {
  phoneNumber: string;
  calling: boolean;
};

export const phoneReducer = (state: PhoneState, action: PhoneAction) => {
  let payload: string | boolean;
  switch (action.type) {
    case actionTypes.update:
      payload = action.payload as string;
      return { ...state, phoneNumber: state.phoneNumber + payload };

    default:
      return { ...state };
  }
};

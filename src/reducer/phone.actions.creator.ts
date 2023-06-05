import { actionTypes } from "./phone.actions.types";
// import { Phone } from "../models/phone";

export type PhoneAction = {
  type: string;
  payload?: string | boolean;
};

export function updateDisplayAction(payload: any): PhoneAction {
  return {
    type: actionTypes.update,
    payload,
  };
}

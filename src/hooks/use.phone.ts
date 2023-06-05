import { useEffect, useReducer } from "react";
import { PhoneState, phoneReducer } from "../reducer/phone.reducer";
import * as ac from "../reducer/phone.actions.creator";

export function usePhone() {
  const initialState: PhoneState = {
    phoneNumber: "",
    calling: false,
  };
  const keyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];

  const [phoneState, dispatch] = useReducer(phoneReducer, initialState);

  function handleAddNumber(value: string) {
    if (phoneState.phoneNumber.length < 9) {
      dispatch(ac.updateDisplayAction(value));
    }
  }

  return {
    display: phoneState.phoneNumber,
    keyValue,
    handleAddNumber,
  };
}
// function handleCall() {
//   if (phoneState.phoneNumber.length === 9) {
//     setIsCalling(true);
//     console.log(isCalling);
//   }
// }
// export function usePhone() {
//   const [isCalling, setIsCalling] = useState<boolean>(false);
//   const [phoneNumber, setPhoneNumber] = useState<string>("");

//   function handleHang() {
//     setIsCalling(true);
//     setPhoneNumber;
//   }

//   function handleDelete() {
//     setPhoneNumber(phoneNumber.slice(phoneNumber.length, 1));
//   }

//

// }

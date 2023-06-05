import { useCallback, useEffect, useMemo, useReducer } from "react";
import { Character } from "../models/character";
import { PhoneState, phoneReducer } from "../reducer/phone.reducer";
import * as ac from "../reducer/character.actions.creator";

export function usePhone() {
  const initialState: PhoneState = {
    phoneNumber: "",
    calling: false,
  };
}

// export function usePhone() {
//   const [isCalling, setIsCalling] = useState<boolean>(false);
//   const [phoneNumber, setPhoneNumber] = useState<string>("");

//   function handleCall() {
//     if (phoneNumber.length === 9) {
//       setIsCalling(true);
//       console.log(isCalling);
//     }
//   }

//   function handleHang() {
//     setIsCalling(true);
//     setPhoneNumber;
//   }

//   function handleAddNumber(value: string) {
//     if (phoneNumber.length < 9) {
//       setPhoneNumber(value);
//     }
//   }

//   function handleDelete() {
//     setPhoneNumber(phoneNumber.slice(phoneNumber.length, 1));
//   }

//   const keyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];

//   return {
//     isCalling,
//     phoneNumber,
//     handleCall,
//     handleHang,
//     handleAddNumber,
//     handleDelete,
//     keyValue,
//   };
// }
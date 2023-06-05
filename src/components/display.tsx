import { useContext } from "react";
import { PhoneContext } from "../context/phone.context";

export function Display() {
  const {
    phoneContext: { phoneNumber },
  } = useContext(PhoneContext);

  return <span className="number">{phoneNumber}</span>;
}

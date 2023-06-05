import { useContext } from "react";
import { PhoneContext } from "../context/phone.context";

export function Action() {
  const {
    phoneContext: { handleCall },
  } = useContext(PhoneContext);

  function handleClick() {
    handleCall();
  }

  return (
    <>
      <a href="#" className="call" onClick={handleClick}>
        Call
      </a>
      <a href="#" className="hang active">
        Hang Up
      </a>
    </>
  );
}

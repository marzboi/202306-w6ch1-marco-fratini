import { useContext } from "react";
import { PhoneContext } from "../context/phone.context";

export function Action() {
  const {
    phoneContext: { handleCall, handleHang, display },
  } = useContext(PhoneContext);

  function handleDial() {
    handleCall();
  }

  function handleHangUp() {
    handleHang();
  }

  return (
    <>
      <a
        href="#"
        className={`call ${display.length === 9 ? "active" : ""}`}
        onClick={handleDial}
      >
        Call
      </a>
      <a href="#" className="hang active" onClick={handleHangUp}>
        Hang Up
      </a>
    </>
  );
}

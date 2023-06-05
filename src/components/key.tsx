import { useContext } from "react";
import { PhoneContext } from "../context/phone.context";

type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  const {
    phoneContext: { phoneNumber, handleAddNumber, handleDelete },
  } = useContext(PhoneContext);

  function handleClick() {
    handleAddNumber(phoneNumber + item);
  }

  function handleClickDelete() {
    handleDelete();
  }

  return (
    <>
      <li>
        {item !== "delete" ? (
          <button className="key" onClick={handleClick}>
            {item}
          </button>
        ) : (
          <button className="key big" onClick={handleClickDelete}>
            {item}
          </button>
        )}
      </li>
    </>
  );
}

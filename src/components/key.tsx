import { useContext } from "react";
import { PhoneContext } from "../context/phone.context";

type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  const {
    phoneContext: { handleAddNumber },
  } = useContext(PhoneContext);

  function handleClick() {
    handleAddNumber(item);
  }

  return (
    <>
      <li>
        {item !== "delete" ? (
          <button className="key" onClick={handleClick}>
            {item}
          </button>
        ) : (
          <button className="key big">{item}</button>
        )}
      </li>
    </>
  );
}

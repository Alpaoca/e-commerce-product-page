import { useState } from "react";

function AmountButton() {
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <div className="bg-light-grayish-blue flex flex-row justify-between rounded-lg h-[3.5rem]">
        <button className="w-[2rem] flex justify-center items-center">
          <img src="./images/icon-minus.svg" />
        </button>
        <div className="flex justify-center items-center font-bold px-[1.75rem]">
          {quantity}
        </div>
        <button className="w-[2rem] flex justify-center items-center">
          <img src="./images/icon-plus.svg" />
        </button>
      </div>
    </>
  );
}

export default AmountButton;

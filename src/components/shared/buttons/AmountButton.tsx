import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hook";
import {
  incrementAmount,
  decrementAmount,
} from "../../../store/shoppingItemSlice";

function AmountButton() {
  const amount = useAppSelector((state) => state.shoppingItem.amount);
  const dispatch = useAppDispatch();
  const [isIncrementPressed, setIsIncrementPressed] = useState(false);
  const [isDecrementPressed, setIsDecrementPressed] = useState(false);

  return (
    <div className="bg-light-grayish-blue flex flex-row justify-between rounded-lg h-[3.5rem]">
      <button
        className={`w-[2rem] flex justify-center items-center ${
          isDecrementPressed && "bg-pale-grayish-blue rounded-l-lg"
        }`}
        onClick={() => dispatch(decrementAmount())}
        onMouseDown={() => setIsDecrementPressed(true)}
        onMouseUp={() => setIsDecrementPressed(false)}
        onMouseLeave={() => setIsDecrementPressed(false)}
        onTouchStart={() => setIsDecrementPressed(true)}
        onTouchEnd={() => setIsDecrementPressed(false)}
      >
        <img src="./images/icon-minus.svg" alt="Decrease" />
      </button>
      <div className="flex justify-center items-center font-bold px-[1.75rem]">
        {amount}
      </div>
      <button
        className={`w-[2rem] flex justify-center items-center ${
          isIncrementPressed && "bg-pale-grayish-blue rounded-r-lg"
        }`}
        onClick={() => dispatch(incrementAmount())}
        onMouseDown={() => setIsIncrementPressed(true)}
        onMouseUp={() => setIsIncrementPressed(false)}
        onMouseLeave={() => setIsIncrementPressed(false)}
        onTouchStart={() => setIsIncrementPressed(true)}
        onTouchEnd={() => setIsIncrementPressed(false)}
      >
        <img src="./images/icon-plus.svg" alt="Increase" />
      </button>
    </div>
  );
}

export default AmountButton;

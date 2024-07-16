import { useAppDispatch } from "../../../store/hook";
import { setAmount, setCartAmount } from "../../../store/shoppingItemSlice";

function DeleteButton() {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(setCartAmount(0));
    dispatch(setAmount(0));
  }

  return (
    <>
      <button className="h-[1rem]" onClick={() => handleClick()}>
        <img src="images\icon-delete.svg" />
      </button>
    </>
  );
}

export default DeleteButton;

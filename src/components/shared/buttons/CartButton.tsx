import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hook";
import DeleteButton from "./DeleteButton";
import useMobileScreen from "../../hook/useMobileScreen";

function CartButton(prop: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const cartAmount = useAppSelector((state) => state.shoppingItem.cartAmount);

  const mobileScreen = useMobileScreen();

  useEffect(() => {
    if (cartAmount > 0) {
      setTotalAmount(cartAmount * 125);
    }
  }, [cartAmount]);

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if (prop.setSelectedBurgerMenu) {
      setIsOpen(false);
    }
  }, [prop.setSelectedBurgerMenu]);

  return (
    <>
      <div className="flex relative mx-8">
        <img
          className="inline object-scale-down cursor-pointer"
          onClick={handleClick}
          src="./images/icon-cart.svg"
        />
        <span
          className={`bg-orange font-bold text-light-grayish-blue px-1.5 text-xsm rounded-lg absolute -right-1.5 ${
            mobileScreen ? "bottom-[1.75rem]" : "bottom-[1.25rem]"
          }`}
        >
          {cartAmount}
        </span>
        {isOpen && (
          <div
            className={` bg-white rounded shadow-2xl z-[9] ${
              mobileScreen
                ? "absolute w-[22rem] -left-[10rem] top-[4rem] "
                : "absolute top-[3.75rem] w-[93vw] -right-[5rem] m-[0.25rem] "
            }`}
          >
            <p className="text-left font-bold m-4">Cart</p>
            <hr className="border-grayish-blue" />
            {cartAmount > 0 ? (
              <div className="mx-4 my-6 flex flex-col gap-[1.5rem]">
                <div className="flex flex-row justify-between items-center gap-[1rem]">
                  <div>
                    <img
                      className="rounded h-[3rem] w-[3rem]"
                      src="./images/image-product-1-thumbnail.jpg"
                    />
                  </div>
                  <div>
                    <div>
                      <p className="text-dark-grayish-blue text-start">
                        Fall Limited Edition Sneakers
                      </p>
                    </div>
                    <div>
                      <p className="text-dark-grayish-blue text-start">
                        $125.00 x {cartAmount}
                        <span className="font-bold text-black">
                          {" "}
                          ${totalAmount}.00
                        </span>
                      </p>
                    </div>
                  </div>
                  <DeleteButton />
                </div>
                <button className="bg-orange font-bold text-light-grayish-blue rounded-[8px] h-[3rem] w-full">
                  Checkout
                </button>
              </div>
            ) : (
              <div className="h-[10.5rem] flex justify-center items-center font-bold text-dark-grayish-blue">
                <p>Your cart is empty.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default CartButton;

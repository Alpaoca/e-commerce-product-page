import { useEffect, useState } from "react";
import useScreenSize from "../../hook/useScreenSize";

function CartButton(prop: any) {
  const [isOpen, setIsOpen] = useState(false);

  const screenSize = useScreenSize();

  const mobileScreen = screenSize.height >= 620 && screenSize.width >= 500;

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if (prop.setSelectedBurgerMenu === true) {
      setIsOpen(false);
    }
  }, [prop.setSelectedBurgerMenu]);

  return (
    <>
      <div className="flex relative mx-8">
        <img
          className="inline object-scale-down cursor-pointer"
          onClick={handleClick}
          src="images\icon-cart.svg"
        />
        <span
          className={`bg-orange font-bold text-light-grayish-blue px-1.5 text-xsm rounded-lg absolute -right-1.5 ${
            mobileScreen ? "bottom-[1.75rem]" : "bottom-[1.25rem]"
          }`}
        >
          0
        </span>
        {isOpen && (
          <div
            className={` bg-white rounded shadow-2xl z-[9] ${
              mobileScreen
                ? "absolute w-[20rem] -left-[10rem] top-[4rem] "
                : "fixed w-[98%] top-[4.25rem] -left-[0rem] m-[0.25rem] "
            }`}
          >
            <p className="text-left font-bold m-4">Cart</p>
            <hr className="border-grayish-blue" />
            <div className="mx-4 my-6">
              <div></div>
              <button className="bg-orange font-bold text-light-grayish-blue rounded-[8px] h-[3rem] w-full">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartButton;

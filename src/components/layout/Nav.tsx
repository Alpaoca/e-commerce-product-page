import { useState } from "react";
import NavButton, { NavButtonProps } from "../shared/buttons/NavButton";
import CartButton from "../shared/buttons/CartButton";
import useScreenSize from "../hook/useScreenSize";

function Nav() {
  let navButtons: NavButtonProps[] = [
    { label: "Collections" },
    { label: "Men" },
    { label: "Women" },
    { label: "About" },
    { label: "Contact" },
  ];

  const [selectedBtn, setSelectedBtn] = useState();

  const screenSize = useScreenSize();

  const mobileScreen = screenSize.height >= 620 && screenSize.width >= 500;

  function handleBtn(btn: NavButtonProps) {
    setSelectedBtn(btn);
  }

  return (
    <>
      {/* {!mobileScreen && (
        <div className="fixed top-0 left-0 h-full w-[10rem] z-99 bg-white shadow-2xl p-4 z-10">
          <button type="button" className="flex justify-start">
            <img className="object-scale-down" src="images\icon-close.svg" />
          </button>
          <ul className="mt-[3rem]">
            {navButtons.map((item) => (
              <li className="my-4 text-left font-kumbh-sans font-bold">
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )} */}
      <nav
        className={`flex justify-between items-start mx-[1rem] mt-[3rem] ${
          !mobileScreen && "mb-[1rem]"
        }`}
      >
        <div className="flex flex-row items-start">
          {!mobileScreen && (
            <button type="button" className="mr-4 mt-1">
              <img className="object-scale-down" src="images\icon-menu.svg" />
            </button>
          )}
          <img
            className={`object-scale-down mr-8 ${mobileScreen && "mt-[1rem]"}`}
            src="images\logo.svg"
          />
          {mobileScreen && (
            <div className="flex flex-row h-20">
              {navButtons.map((item, index) => (
                <NavButton
                  key={index}
                  label={item.label}
                  selectedBtn={selectedBtn}
                  onClick={handleBtn}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex">
          <CartButton mobileScreen="mobileScreen" />
          <img
            className={`object-scale-down ${
              mobileScreen ? "size-12" : "size-8"
            }`}
            src="./images/image-avatar.png"
          />
        </div>
      </nav>
      <hr className="border-grayish-blue" />
    </>
  );
}

export default Nav;

import { useState } from "react";
import NavButton, { NavButtonProps } from "../shared/buttons/NavButton";
import CartButton from "../shared/buttons/CartButton";

function Nav() {
  let navButtons: NavButtonProps[] = [
    { label: "Collections" },
    { label: "Men" },
    { label: "Women" },
    { label: "About" },
    { label: "Contact" },
  ];

  const [selectedBtn, setSelectedBtn] = useState();

  function handleBtn(btn: NavButtonProps) {
    setSelectedBtn(btn);
  }

  return (
    <>
      <nav className="flex justify-between items-start">
        <div className="fixed top-0 left-0 h-full w-[10rem] z-99 bg-white shadow-2xl p-4">
          <button type="button" className="relative left-0">
            <img className="object-scale-down" src="images\icon-close.svg" />
          </button>
          <ul className="">
            {navButtons.map((item) => (
              <li className="my-4 text-left font-kumbh-sans font-bold">
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row items-start">
          <button type="button" className="mr-4 mt-1">
            <img className="object-scale-down" src="images\icon-menu.svg" />
          </button>
          <img className="object-scale-down mr-8" src="images\logo.svg" />
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
        </div>
        <div className="flex">
          <CartButton />

          <img
            className="object-scale-down size-12 rounded-full border-2 border-transparent cursor-pointer transition-colors hover:border-orange"
            src="images\image-avatar.png"
          />
        </div>
      </nav>
      <hr className="border-grayish-blue" />
    </>
  );
}

export default Nav;

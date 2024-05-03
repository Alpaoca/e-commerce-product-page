import NavButton, { NavButtonProps } from "../shared/buttons/NavButton";

function Nav() {
  let navButtons: NavButtonProps[] = [
    { label: "Collections" },
    { label: "Men" },
    { label: "Women" },
    { label: "About" },
    { label: "Contact" },
  ];

  return (
    <>
      <div className="flex justify-between pb-8">
        <div className="flex flex-row">
          <img className="object-scale-down mr-4" src="images\icon-menu.svg" />
          <img className="object-scale-down mr-8" src="images\logo.svg" />
          <div className="flex flex-row">
            {navButtons.map((item, index) => (
              <NavButton key={index} label={item.label} />
            ))}
          </div>
        </div>
        <div className="flex flex-row">
          <img
            className="inline object-scale-down mx-8"
            src="./images/icon-cart.svg"
          />
          <img
            className="object-scale-down size-12"
            src="./images/image-avatar.png"
          />
        </div>
      </div>
      <hr className="border-grayish-blue" />
    </>
  );
}

export default Nav;

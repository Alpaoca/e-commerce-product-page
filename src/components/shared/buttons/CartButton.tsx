import {
  useFloating,
  useClick,
  useInteractions,
  useDismiss,
} from "@floating-ui/react";
import { useState } from "react";

function CartButton() {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });
  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePressEvent: "mousedown",
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  return (
    <>
      <div className="flex relative mx-8">
        <img
          ref={refs.setReference}
          {...getReferenceProps()}
          className="inline object-scale-down cursor-pointer"
          src="images\icon-cart.svg"
        />
        <span className="bg-orange font-bold text-light-grayish-blue px-1.5 text-xsm rounded-lg absolute bottom-7 -right-1.5 ">
          0
        </span>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="w-80 bg-white rounded shadow-2xl"
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

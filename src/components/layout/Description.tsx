import AddButton from "../shared/buttons/AddButton";
import AmountButton from "../shared/buttons/AmountButton";

function Description() {
  return (
    <>
      <div>
        <h1>SNEAKER COMPANY</h1>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear comapion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div>
          <p>$125.00</p>
          <div>
            <p>50%</p>
          </div>
          <p>$250.00</p>
        </div>
        <div>
          <AddButton />
          <AmountButton />
        </div>
      </div>
    </>
  );
}

export default Description;

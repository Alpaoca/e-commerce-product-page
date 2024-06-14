import "./App.css";
import Description from "./components/layout/Description";
import Nav from "./components/layout/Nav";
import ProductImage from "./components/layout/ProductImage";

function App() {
  return (
    <>
      <Nav />
      <div className="flex flex-row justify-center">
        <ProductImage />
        <Description />
      </div>
    </>
  );
}

export default App;

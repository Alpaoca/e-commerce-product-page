import "./App.css";
import Description from "./components/layout/Description";
import Nav from "./components/layout/Nav";
import ProductImage from "./components/layout/ProductImage";
import useScreenSize from "./components/hook/useScreenSize";

function App() {
  const screenSize = useScreenSize();

  const mobileScreen = screenSize.height >= 620 && screenSize.width >= 500;
  return (
    <>
      <Nav />
      <div className={`flex ${mobileScreen ? "flex-row" : "flex-col"}`}>
        <ProductImage />
        <Description />
      </div>
    </>
  );
}

export default App;

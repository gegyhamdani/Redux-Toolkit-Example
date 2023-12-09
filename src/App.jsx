import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./features/productlist/ProductList";
import Cart from "./features/cart/Cart";

const App = () => {
  const [isShowCart, setIsShowCart] = useState(false);

  const handleShowCart = () => {
    setIsShowCart(true);
  };

  const handleHideCart = () => {
    console.log(1);
    setIsShowCart(false);
  };

  return (
    <>
      {isShowCart ? <Cart onHideCart={handleHideCart} /> : null}
      <div className="min-h-full">
        <Header onShowCart={handleShowCart} />

        <main className="mx-auto max-w-7xl pb-12 sm:px-6">
          <ProductList />
        </main>
      </div>
    </>
  );
};

export default App;

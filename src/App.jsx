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
    console.log(1)
    setIsShowCart(false);
  };

  return (
    <>
      {isShowCart ? <Cart onHideCart={handleHideCart} /> : null}
      <div className="min-h-full">
        <Header onShowCart={handleShowCart} />

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl pb-12 sm:px-6">
            <div className="bg-sky-50 h-[calc(100vh-(116px+64px+3rem))] overflow-auto rounded-lg shadow-lg border">
              <ProductList />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;

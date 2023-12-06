import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";

const Header = ({ onShowCart }) => {
  const totalItems = useSelector(selectCartTotalItems);

  const handleShowCart = () => {
    if (totalItems === 0) return

    onShowCart()
  }
  
  return (
    <div className="bg-blue-700 pb-32">
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <img
              className="h-10 w-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=100"
              alt="Your Company"
            />
            <div className="flex items-center">
              <button
                type="button"
                className="relative rounded-full bg-blue-800 p-2 text-gray-300 hover:text-white"
                onClick={handleShowCart}
              >
                {totalItems ? (
                  <span className="absolute rounded-full w-6 h-6 bg-red-600 text-sm -top-2 -right-2 flex items-center justify-center">
                    {totalItems}
                  </span>
                ) : null}
                <ShoppingCartIcon className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <header className="text-white">
        <div className="mx-auto max-w-7xl px-4 pt-6 pb-14 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-100">
            Product List
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;

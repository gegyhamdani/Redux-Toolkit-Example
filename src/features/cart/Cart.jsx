import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
  selectCartTotalItems,
  selectCartTotalPrices,
} from "./cartSlice";

const Cart = ({ onHideCart }) => {
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartTotalItems);
  const totalPrices = useSelector(selectCartTotalPrices);
  const dispatch = useDispatch();

  const handleAddCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleOpenWhatsapp = () => {
    const phoneNumber = "6282120487094";
    const message = encodeURIComponent(
      "Pesanan anda adalah: \n\n" +
        cartItems
          .map(
            (product) =>
              product.title +
              " x " +
              product.totalItems +
              " = " +
              " $" +
              product.totalPrice
          )
          .join("\n") +
        "\n\nTotal: " +
        "$" +
        totalPrices +
        "\n\nSilahkan kirim bukti pembayaran ke nomor diatas."
    );

    const URL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`;

    window.open(URL, "_blank");
  };

  return (
    <Modal onClose={onHideCart}>
      <div className="flex flex-col gap-6 p-1 sm:p-2 w-full lg:w-[900px]">
        <div className="flex flex-col gap-6 max-h-[500px] overflow-auto">
          {cartItems.map((product) => (
            <div
              className="w-full border-b-4 border-blue-200 pb-4"
              key={product.id}
            >
              <div className="flex items-center w-full">
                <div className="w-[120px] h-auto overflow-hidden">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover"
                    alt={product.id}
                  />
                </div>
                <div className="ml-10 w-[75%]">
                  <h3 className="capitalize mt-3 text-lg">{product.title}</h3>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm">$ {product.price}</h4>
                    <h3 className="font-bold text-lg">
                      $ {product.totalPrice}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 mt-4 ml-auto">
                    <button
                      type="button"
                      className="relative rounded-full bg-blue-400 w-5 h-5 text-white flex items-center justify-center"
                      onClick={() => handleRemoveCart(product)}
                    >
                      -
                    </button>
                    <h3>{product.totalItems}</h3>
                    <button
                      type="button"
                      className="relative rounded-full bg-blue-400 w-5 h-5 text-white flex items-center justify-center"
                      onClick={() => handleAddCart(product)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-bold text-md">Total Item: {totalItems}</h3>
          <h3 className="font-bold text-md">Total Price: $ {totalPrices}</h3>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl text-sm"
            onClick={onHideCart}
          >
            Close
          </button>
          <button
            className="bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-8 rounded-xl text-sm"
            onClick={handleOpenWhatsapp}
          >
            Checkout (whatsapp)
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;

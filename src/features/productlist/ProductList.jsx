import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../app/services/productList";
import { addToCart } from "../cart/cartSlice";

const ProductList = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  const dispatch = useDispatch();

  const handleAddCart = (product) => {
    dispatch(addToCart(product))
  }

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="py-6 lg:py-10">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 rounded-xl sm:grid-cols-2 lg:grid-cols-3 w-full h-full">
          {products.map((product) => (
            <div
              className="relative overflow-hidden rounded-xl w-full border bg-white p-4 shadow"
              key={product.id}
            >
              <div className="group relative w-[80%] h-[300px] mx-auto overflow-hidden">
                <img
                  src={product.image}
                  className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
                  alt={product.id}
                />
              </div>
              <div className="w-full flex justify-end items-center flex-col gap-6 z-10 mt-8">
                <button
                  className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-xl text-sm"
                  onClick={() => handleAddCart(product)}
                >
                  BUY NOW
                </button>
                <div className="text-black flex flex-col gap-1 w-full mt-">
                  <p className="ml-auto text-xs">{product.category}</p>
                  <h3 className="capitalize mt-3">{product.title}</h3>
                  <h3 className="font-bold">$ {product.price}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

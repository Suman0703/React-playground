import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice";
import { fetchProducts } from "../redux/productslice";
import { useEffect } from "react";

const Product = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());   
  }, []);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading products</p>;

  return (
    <div>
      <h2>Products</h2>

      {items.map((product) => (
        <div key={product.id}>
          <span>{product.title}</span>

          <button
            onClick={() =>
              dispatch(addToCart({ ...product, qty: 1 }))
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
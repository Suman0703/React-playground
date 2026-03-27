import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice";

const Product = () => {
  const dispatch = useDispatch();

  const productList = [
    { id: 1, name: "T-Shirt", price: 20 },
    { id: 2, name: "Hoodie", price: 50 }
  ];

  return (
    <div>
      <h2>Products</h2>

      {productList.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>{product.name} - ${product.price}</span>

          <button
            onClick={() =>
              dispatch(addToCart({ ...product, qty: 1 }))
            }
            style={{ marginLeft: "10px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
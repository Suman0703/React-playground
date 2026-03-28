import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slice"; // ✅ FIX

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart Items</h2>

      {items.length > 0 && (
        <button
          onClick={() => dispatch(clearCart())}
          style={{
            marginBottom: "10px",
            padding: "8px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Clear Cart
        </button>
      )}

      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        items.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            {item.name} - Qty: {item.qty}

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
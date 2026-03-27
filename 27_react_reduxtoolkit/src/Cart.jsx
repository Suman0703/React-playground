import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart Items</h2>

      {items.map((item) => (
        <div key={item.id}>
          {item.name} - Qty: {item.qty}
        </div>
      ))}
    </div>
  );
};

export default Cart;
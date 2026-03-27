import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.cart.count);

  return (
    <div style={{ padding: "20px", borderBottom: "1px solid #eee" }}>
      <h2>🛒 Cart: {count}</h2>
    </div>
  );
};

export default Header;
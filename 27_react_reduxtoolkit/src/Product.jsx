import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slice";
import { fetchProducts } from "../redux/productslice";
import { useEffect } from "react";

const Product = () => {
  const dispatch = useDispatch();

  // ✅ Get products + cart data
  const { items, status } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ Fetch products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // ✅ Loading state
  if (status === "loading") {
    return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  }

  // ❌ Error state
  if (status === "failed") {
    return <h2 style={{ textAlign: "center" }}>Error loading products</h2>;
  }

  return (
    <div className="container">
      <style>{`
        .container {
          padding: 40px 5%;
          font-family: 'Inter', sans-serif;
        }

        .title {
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 25px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 25px;
        }

        .card {
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 15px;
          transition: 0.3s;
          background: #fff;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .img-box {
          width: 100%;
          height: 200px;
          background: #f5f5f5;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .name {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .price {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .desc {
          font-size: 12px;
          color: #666;
          margin-bottom: 10px;
        }

        .btn {
          width: 100%;
          padding: 10px;
          border: none;
          background: black;
          color: white;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 700;
        }

        .btn:hover {
          background: #333;
        }

        .btn-remove {
          background: red;
        }

        .btn-remove:hover {
          background: darkred;
        }
      `}</style>

      <h2 className="title">🛍 Products</h2>

      <div className="grid">
        {items.map((product) => {
          // ✅ Check if product is already in cart
          const isInCart = cartItems.some(
            (item) => item.id === product.id
          );

          return (
            <div key={product.id} className="card">

              <div className="img-box">
                <img src={product.thumbnail} alt={product.title} />
              </div>

              <div className="name">{product.title}</div>

              <div className="price">${product.price}</div>

              <div className="desc">
                {product.description.substring(0, 60)}...
              </div>

              {/* ✅ Conditional Button */}
              {isInCart ? (
                <button
                  className="btn btn-remove"
                  onClick={() =>
                    dispatch(removeFromCart(product.id))
                  }
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="btn"
                  onClick={() =>
                    dispatch(addToCart({ ...product, qty: 1 }))
                  }
                >
                  Add to Cart
                </button>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
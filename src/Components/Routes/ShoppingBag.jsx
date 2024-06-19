import { IoIosClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./ShoppingBag.css";
import { useContext } from "react";
import { StoreContext } from "../Context/Context";
const ShoppingBag = () => {
  const { products, total, removeToCart } = useContext(StoreContext);
  const handleRemove = (productId) => {
    removeToCart(productId);
  };

  return (
    <div className="shoppingBagContainer">
      <div className="delete">
        <NavLink to="/">
          <IoIosClose />
        </NavLink>
        <div>
          <h1>Your Cart</h1>
          <h3>Total Price: {total}</h3>
          {products.map(({ id, title, thumbnail, price }) => (
            <>
              <ul key={id}>
                <div className="addedProduct">
                  <li>Product: {title}</li>
                  <li>Price: {price}</li>
                  <img src={thumbnail} alt={id} className="cartImage" />
                </div>

                <button onClick={() => handleRemove(id)} className="removeBtn">
                  Remove
                </button>
              </ul>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;

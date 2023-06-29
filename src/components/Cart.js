import { useEffect, useState } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      return (ans += item.amount * item.price);
    });
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div className="cart_buttons">
            <button onClick={() => handleChange(item, +1)}> + </button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}> - </button>
          </div>
          <div className="cart_price_remove">
            <span>${item.price}</span>
            <button onClick={() => handleRemove(item.id)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of the listed items in Cart</span>
        <span>
          ${price} / ${Math.round(price)}
        </span>
      </div>
    </article>
  );
};

export default Cart;

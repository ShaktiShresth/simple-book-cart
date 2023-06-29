import "./App.css";
import "./styles/product.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Heading from "./components/Heading";
import CardHead from "./components/CartHead";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div className="App">
      <React.Fragment>
        <Navbar size={cart.length} setShow={setShow} />
        {show ? (
          <div>
            <Heading />
            <Product handleClick={handleClick} />
          </div>
        ) : (
          <div>
            <CardHead />
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          </div>
        )}
        {warning && (
          <div className="warning">
            <i className="fa fa-exclamation-triangle"></i>
            <p>The clicked item is already present on your cart.</p>
          </div>
        )}
      </React.Fragment>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Amazoan from "./component/Amazoan";
import Cart from "./component/Cart";
import "./styles/amazoan.css";
const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [Warning, setWarning] = useState(false);
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
  return (
    <div>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {warning && (
        <div className="Warning">Item is already added to your cart</div>
      )}
    </div>
  );
};

export default App;

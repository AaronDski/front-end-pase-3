import "./App.css";
import { useEffect, useState } from "react";
import PartCard from "./PartCard.js";
import Cart from "./Cart";
import NavBar from "./NavBar.js";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [cartArr, setCartArr] = useState([]);
  const [partArr, setPartArr] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/cart")
      .then((r) => r.json())
      .then(setCartArr);
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/parts_list")
      .then((r) => r.json())
      .then(setPartArr);
  }, []);

  function handleAddToCart(part) {
    const cartItem = {
      user_id: 3,
      part_id: part.id,
      item_name: part.item_name,
      make: part.make,
      model: part.model,
      year: part.year,
      price: part.price,
    };
    let config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem),
    };
    fetch("http://localhost:9292/cart", config)
      .then((r) => r.json())
      .then((data) => setCartArr([...cartArr, data]));
  }

  function handleDeleteClick(id) {
    fetch(`http://localhost:9292/cart/${id}`, {
      method: "DELETE",
    });
    const filteredCart = cartArr.filter((item) => item.id !== id);
    setCartArr(filteredCart);
  }

  return (
    <div className="App" style={{ backgroundImage: "url./carback.webp" }}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/parts_list">
            <PartCard addToCart={handleAddToCart} partArr={partArr} />
          </Route>
          <Route path="/cart">
            <Cart cartArr={cartArr} onDelete={handleDeleteClick} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

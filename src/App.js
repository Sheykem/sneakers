import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
function App(props) {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");


  useEffect(() => {
    // fetch("https://6578bc9cf08799dc8045f462.mockapi.io/items")
    //   .then((res) => res.json())
    //   .then((json) => setItems(json));
    // asiox подход

    axios
      .get("https://6578bc9cf08799dc8045f462.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://6578bc9cf08799dc8045f462.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddFavorite = (obj) => {
    if (favorites.find((item) => item.id == obj.id)) {
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      setFavorites((prev) => [...prev, obj]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((el) => el.id !== id));
  };

  const toAddToCart = (obj) => {
    const objWillAddCart = items.find((el) => el.id == obj.id);
    if (!cartItems.find((item) => item.id == obj.id) && objWillAddCart) {
      setCartItems((prev) => [...prev, objWillAddCart]);
    }
    axios.post("https://6578bc9cf08799dc8045f462.mockapi.io/cart/", obj);
  };

  const removeSneakers = (id) => {
    axios.delete(`https://6578bc9cf08799dc8045f462.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <div className="wrapper clear">
      {openDrawer && (
        <Drawer
          removeSneakers={(id) => removeSneakers(id)}
          cartItems={cartItems}
          onCloseCart={() => setOpenDrawer(false)}
        />
      )}
      <Header openDrawer={() => setOpenDrawer(true)} />

      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites
              removeFavorite={(id) => removeFavorite(id)}
              itemFavorites={favorites}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onSearchInput={onSearchInput}
              onAddFavorite={onAddFavorite}
              toAddToCart={toAddToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

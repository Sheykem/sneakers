import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React, { useEffect } from "react";
import axios from "axios";
function App(props) {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
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

  const toAddToCart = (obj) => {
    axios.post("https://6578bc9cf08799dc8045f462.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
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
      <div className="content p-40 ">
        <div className="d-flex align-center mb-40 justify-between ">
          <h1>
            {searchValue ? `Поиск по запросу ${searchValue}` : "Все кросовки"}
          </h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear"
                src="/img/btnrRemove.svg"
                alt="remove"
              />
            )}
            <input
              onChange={onSearchInput}
              type="text"
              placeholder="Поиск..."
              value={searchValue}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter(
              (el) => el.title.toLowerCase().includes(searchValue.toLowerCase()) // поиск по крос
            )
            .map((el, i) => (
              <Card
                title={el.title}
                price={el.price}
                imgUrl={el.imgUrl}
                key={el.id}
                id={el.id}
                onClickFavorite={() => console.log("like")}
                onClickPlus={(obj) => toAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

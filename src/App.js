import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React, { useEffect } from "react";
function App(props) {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  useEffect(() => {
    fetch("https://6578bc9cf08799dc8045f462.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const toAddToCart = (obj) => {
      setCartItems((prev) => [...prev, obj]);
  };
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40 ">
        <div className="d-flex align-center mb-40 justify-between ">
          <h1>Все кросовки</h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((el, i) => (
            <Card
              title={el.title}
              price={el.price}
              imgUrl={el.imgUrl}
              key={i}
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

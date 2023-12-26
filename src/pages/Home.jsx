import React from "react";
import Card from "../components/Card";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onSearchInput,
  onAddFavorite,
  toAddToCart,
}) => {
  return (
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
              onClickFavorite={(obj) => onAddFavorite(obj)}
              onClickPlus={(obj) => toAddToCart(obj)}
              key={el.id}
              {...el}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;

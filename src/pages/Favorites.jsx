import React from "react";

const Favorites = ({ itemFavorites = [], removeFavorite }) => {
  const removeFav = (id) => {
    removeFavorite(id);
  };
  return (
    <div className="content p-40 ">
      <div className="d-flex align-center mb-40 justify-between ">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {itemFavorites.map((el) => (
          <div key={el.id} className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src={el.imgUrl}
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">{el.title}</p>
              <b>{el.price} грн.</b>
            </div>
            <img
              onClick={() => removeFav(el.id)}
              src="/img/btnrRemove.svg"
              alt="remove"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

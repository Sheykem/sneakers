import React from "react";

function Card() {
  return (
    <div className="card">
      <img src="/img/likeUnliked.svg" alt="" />
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>5000 грн</b>
        </div>
        <button className="button">
          <img width={32} height={32} src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;

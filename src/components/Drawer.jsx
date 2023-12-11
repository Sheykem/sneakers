import React from "react";

const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer ">
        <h2 className="mb-30">
          Корзина
          <img className="btnRemove" src="/img/btnrRemove.svg" alt="remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className=" mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt=""
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>1000 грн</b>
            </div>
            <img className="btnRemove" src="/img/btnrRemove.svg" alt="remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className=" mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt=""
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>1000 грн</b>
            </div>
            <img className="btnRemove" src="/img/btnrRemove.svg" alt="remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итог:</span>
              <div></div>
              <b>2000 грн</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%</span>
              <div></div>
              <b>100 грн</b>
            </li>
          </ul>
          <button className="greenButton">
            <span>Оформить заказ</span>
            <img className="arrowBtn" src="/img/btnArrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

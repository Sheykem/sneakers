import React from "react";
import styles from "./Drawer.module.scss";

const Drawer = () => {
  return (
    <div  className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="mb-30">
          Корзина
          <img
            className={styles.btnRemove}
            src="/img/btnrRemove.svg"
            alt="remove"
          />
        </h2>

        <div className={styles.items}>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className=" mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>1000 грн</b>
            </div>
            <img
              className={styles.btnRemove}
              src="/img/btnrRemove.svg"
              alt="remove"
            />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className=" mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>1000 грн</b>
            </div>
            <img
              className={styles.btnRemove}
              src="/img/btnrRemove.svg"
              alt="remove"
            />
          </div>
        </div>
        <div className={styles.cartTotalBlock}>
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
          <button className={styles.greenButton}>
            <span>Оформить заказ</span>
            <img
              className={styles.arrowBtn}
              src="/img/btnArrow.svg"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

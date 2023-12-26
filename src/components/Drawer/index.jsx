import React from "react";
import styles from "./Drawer.module.scss";

const Drawer = ({ onCloseCart, cartItems = [], removeSneakers }) => {
  const removeCart = (id) => {
    removeSneakers(id);
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="mb-30">
          Корзина
          <img
            onClick={onCloseCart}
            className={styles.btnRemove}
            src="/img/btnrRemove.svg"
            alt="remove"
          />
        </h2>

        {cartItems.length > 0 ? (
          <div className={styles.items}>
            {cartItems.map((obj) => (
              <div key={obj.id} className="cartItem d-flex align-center mb-20">
                <img
                  className=" mr-20"
                  width={70}
                  height={70}
                  src={obj.imgUrl}
                  alt="Sneakers"
                />
                <div className="mr-20">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} грн.</b>
                </div>
                <img
                  className={styles.btnRemove}
                  src="/img/btnrRemove.svg"
                  alt="remove"
                  onClick={() => removeCart(obj.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="zeroDrawer d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onCloseCart} className="greenButton">
              <img
                className="mr-10 cu-p"
                src="/img/arrowBack.svg"
                alt="Arrow"
              />
              Вернуться назад
            </button>
          </div>
        )}

        {cartItems.length > 0 ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default Drawer;

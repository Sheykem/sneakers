import React from "react";
import styles from './Card.module.scss';

function Card({ title = "название", price = "отсутсвует ", imgUrl , onClickAdd}) {

  return (
    <div className={styles.card}>
      <img src="/img/likeUnliked.svg" alt="like" />
      <img width={133} height={112} src={imgUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{price} грн.</b>
        </div>
        <button  className={styles.button} onClick={onClickAdd}>
          <img width={32} height={32} src="/img/plus.svg" alt="Add" />
        </button>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import styles from "./Card.module.scss";

function Card({
  title = "название",
  price = "отсутсвует ",
  imgUrl,
  id,
  onClickFavorite,
  onClickPlus,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const hendleOnClickPlus = () => {
    onClickPlus({ title, price, imgUrl, id });
    setIsAdded(!isAdded);
  };

  const hendleClickFavorite = () => {
    onClickFavorite({ title, price, imgUrl, id });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <img
        className="cu-p"
        onClick={hendleClickFavorite}
        src={isFavorite ? "/img/likeLiked.svg" : "/img/likeUnliked.svg"}
        alt="like"
      />
      <img width={133} height={112} src={imgUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{price} грн.</b>
        </div>
        <img
          onClick={hendleOnClickPlus}
          className={styles.plus}
          src={isAdded ? "/img/complitBuy.svg" : "/img/plus.svg"}
          alt="Add"
        />
      </div>
    </div>
  );
}

export default Card;

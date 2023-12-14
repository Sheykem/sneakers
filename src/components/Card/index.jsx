import React from "react";
import styles from "./Card.module.scss";

function Card({
  title = "название",
  price = "отсутсвует ",
  imgUrl,
  onClickFavorite,
  onClickPlus,
}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const hendleOnClickPlus = () => {
    onClickPlus({ title, price, imgUrl });
    setIsAdded(!isAdded);
  };

  // React.useEffect(() => {
  //   console.log("переменная изминилась");
  // }, [isAdded]);

  return (
    <div className={styles.card}>
      <img onClick={onClickFavorite} src="/img/likeUnliked.svg" alt="like" />
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

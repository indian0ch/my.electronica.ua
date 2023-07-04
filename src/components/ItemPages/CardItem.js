import { Fragment } from "react";
import classes from "./CardItem.module.css";

function CardItem(props) {
  return (
    <div className={classes.cardItem}>
      <img
        src={require(`../../asserts/${props.src}`)}
        alt="Фотографія товару"
      ></img>
      <div className={classes["cardItem-body"]}>
        <p>{props.name}</p>
        <p>{props.price} грн.</p>
      </div>
      <div className={classes["cardItem-footer"]}>
        <button className="btn btn-outline-dark btn-lg" onClick={props.onClick}>Детальніше</button>
      </div>
    </div>
  );
}
export default CardItem;

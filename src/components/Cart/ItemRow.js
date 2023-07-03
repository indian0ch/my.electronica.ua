import { Fragment } from "react";
import classes from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../storage/cart-slice";

function ItemRow(props) {
  const dispatch = useDispatch();

  function onDecreaseHandler(event) {
    event.preventDefault();
    dispatch(cartActions.decreaseItem(props.name));
  }
  function onIncreaseHandler(event) {
    event.preventDefault();
    dispatch(cartActions.increaseItem(props.name));
  }

  return (
    <Fragment>
      <div className={classes["row-image-container"]}>
        <img src={require(`../../asserts/${props.imageSrc}`)}></img>
      </div>
      <div className={classes["row-name-container"]}>
        <p>{props.name}</p>
        <span>{props.price} грн</span>
      </div>
      <div className={classes["row-count-container"]}>
        <div>
          {" "}
          <button onClick={onDecreaseHandler}>—</button>
          <span>{props.count}</span>
          <button style={{ fontSize: "24px" }} onClick={onIncreaseHandler}>
            +
          </button>
        </div>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency-systems-regular/48/trash--v2.png"
          alt="trash--v2"
        />
      </div>
      <div className={classes["row-price-container"]}>
        <span> {props.count * props.price} грн</span>
      </div>
    </Fragment>
  );
}
export default ItemRow;

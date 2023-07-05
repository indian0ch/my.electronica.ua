import { Fragment } from "react";
import classes from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../storage/cart-slice";
import { Button, ButtonGroup } from "reactstrap";
import TrashIcon from "./TrashIcon";

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
  function onDeleteHandler() {
    dispatch(cartActions.removeItem(props.name));
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
        <ButtonGroup className={classes["row-count-container-group"]}>
          <Button color="dark" onClick={onDecreaseHandler} outline>
            —
          </Button>
          <Button color="dark" outline>
            {props.count}
          </Button>
          <Button color="dark" onClick={onIncreaseHandler} outline>
            +
          </Button>
        </ButtonGroup>
        <TrashIcon onDeleteHandler={onDeleteHandler}/>
        {/* <div>
          {" "}
          <button className="btn" onClick={onDecreaseHandler}>
            —
          </button>
          <span>{props.count}</span>
          <button
            className="btn btn-outline-dark"
            style={{ fontSize: "24px" }}
            onClick={onIncreaseHandler}
          >
            +
          </button>
        </div>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency-systems-regular/48/trash--v2.png"
          alt="trash--v2"
        /> */}
      </div>
      <div className={classes["row-price-container"]}>
        <span> {props.count * props.price} грн</span>
      </div>
    </Fragment>
  );
}
export default ItemRow;

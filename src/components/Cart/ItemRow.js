import { Fragment, useState, useEffect } from "react";
import classes from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../storage/cart-slice";
import { Button, ButtonGroup, Spinner } from "reactstrap";
import TrashIcon from "./TrashIcon";

function ItemRow(props) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading]=useState(false);

  function onDecreaseHandler(event) {
    event.preventDefault();
    dispatch(cartActions.decreaseItem(props.name));
    setIsLoading(true);
  }
  function onIncreaseHandler(event) {
    event.preventDefault();
    dispatch(cartActions.increaseItem(props.name));
    setIsLoading(true);
  }
  function onDeleteHandler() {
    dispatch(cartActions.removeItem(props.name));
    setIsLoading(true);
  }

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  },[isLoading]);

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
      </div>
      <div className={classes["row-price-container"]}>
        {isLoading?(<Spinner size='sm' color="dark"/>):(<span> {props.count * props.price} грн</span>)}
      </div>
    </Fragment>
  );
}
export default ItemRow;

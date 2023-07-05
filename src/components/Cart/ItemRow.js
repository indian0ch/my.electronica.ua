import {useState, useEffect } from "react";
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
    <div className="row justify-content-md-center">
      <div className={`${classes["row-image-container"]} col-3 col-xxl-3  col-lg-3 col-sm`}>
        <img src={require(`../../asserts/${props.imageSrc}`)}></img>
      </div>
      <div className={`${classes["row-name-container"]} col-4 col-xxl-4 col-lg-3 col-sm`}>
        <p>{props.name}</p>
        <span>{props.price} грн</span>
      </div>
      <div className={`${classes["row-count-container"]} col-4 col-xxl-3 col-lg-3 col-sm`}>
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
      <div className={`${classes["row-price-container"]} col-1 col-xxl2 col-lg-2  col-sm`}>
        {isLoading?(<Spinner size='sm' color="dark"/>):(<span> {props.count * props.price} грн</span>)}
      </div>
    </div>
  );
}
export default ItemRow;

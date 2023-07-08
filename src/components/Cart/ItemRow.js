import { useState, useEffect } from "react";
import classes from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../storage/cart-slice";
import { Button, ButtonGroup, Spinner, Row } from "reactstrap";
import TrashIcon from "./TrashIcon";

function ItemRow(props) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  function onDecreaseHandler(event) {
    event.preventDefault();
    console.log(props.color);
    dispatch(cartActions.decreaseItem({name:props.name, color:props.color}));
    setIsLoading(true);
  }
  function onIncreaseHandler(event) {
    event.preventDefault();
    dispatch(cartActions.increaseItem({name:props.name, color:props.color}));
    setIsLoading(true);
  }
  function onDeleteHandler() {
    dispatch(cartActions.removeItem({name:props.name, color:props.color}));
    setIsLoading(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [isLoading]);

  return (
    <div className="container-sm">
      <Row>
        <div className={`${classes["row-image-container"]} col-md-3 col-12`}>
          <img src={require(`../../asserts/${props.imageSrc}`)}></img>
        </div>
        <div className={`${classes["row-container"]} col-md-7 col-12`}>
          <div className={`${classes["row-name-container"]} col-md-3 col-sm-6 col-12`}>
            <p>{props.name}</p>
            <span>{props.color}</span>
          </div>
          <div className={`${classes["row-count-container"]} col-md-4 col-sm-6 col-12`}>
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
            <TrashIcon onDeleteHandler={onDeleteHandler} />
          </div>
        </div>
        <div className={`${classes["row-price-container"]} col-md-2 col-12`}>
          {isLoading ? (
            <Spinner size="sm" color="dark" />
          ) : (
            <span> {props.count * props.price} грн</span>
          )}
        </div>
      </Row>
    </div>
  );
}
export default ItemRow;

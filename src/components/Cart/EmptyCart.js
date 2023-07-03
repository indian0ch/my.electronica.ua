import { Fragment } from "react";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";

function EmptyCart(props) {
  return (
    <Fragment>
      <Link to="/" className={classes.continueSellButton}>Продовжити покупки</Link>
    </Fragment>
  );
}
export default EmptyCart;

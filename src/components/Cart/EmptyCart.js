import { Fragment } from "react";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";

function EmptyCart(props) {
  return (
    <div className={classes.continueSellButton}>
      <Link to="/">Продовжити покупки</Link>
    </div>
  );
}
export default EmptyCart;

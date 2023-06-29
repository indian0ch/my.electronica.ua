import { Fragment } from "react";
import classes from "./Header.module.css";
import CartIcon from "./CartIcon.js";
import { Link } from "react-router-dom";

function HeaderMenu(props) {
  function onClickCartHandler() {}

  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar-container"]}>
        <a className={classes["navbar-brand"]}>My electronica</a>
        {/* <button className={classes["navbar-toggler"]}></button> */}
        <div className={classes["navbar-collapse"]}>
          <ul className={classes["navbar-nav"]}>
            <Link to="/">Home</Link>
            {/* <li>Home</li> */}
            <li>About</li>
          </ul>
          {/* <div className={classes['cart-div']}>

          </div> */}
          <button
            className={classes["cart-button"]}
            onClick={onClickCartHandler}
          >
            <span className={classes["cart-icon"]}>
              <CartIcon />
            </span>
            <span>Кошик</span>
            <span className={classes["cart-badge"]}>0</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
export default HeaderMenu;

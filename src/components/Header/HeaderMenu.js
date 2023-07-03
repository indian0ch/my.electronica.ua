import { Fragment } from "react";
import classes from "./Header.module.css";
import CartIcon from "./CartIcon.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HeaderMenu(props) {
  const { itemCount } = useSelector((state) => ({
    itemCount: state.cartFunctional.totalCount,
  }));
  function onClickCartHandler() {}

  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar-container"]}>
        <a className={classes["navbar-brand"]}>My electronica</a>
        {/* <button className={classes["navbar-toggler"]}></button> */}
        <div className={classes["navbar-collapse"]}>
          <ul className={classes["navbar-nav"]}>
            <Link to="/">Головна</Link>
            {/* <li>Home</li> */}
            <Link to="/about">Про нас</Link>
          </ul>
          {/* <div className={classes['cart-div']}>

          </div> */}
          <Link className={classes["cart-button"]} to="/cart">
            <span className={classes["cart-icon"]}>
              <CartIcon />
            </span>
            <span>Кошик</span>
            <span className={classes["cart-badge"]}>{itemCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default HeaderMenu;

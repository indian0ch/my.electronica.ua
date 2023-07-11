import { useEffect } from "react";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import NotEmptyCart from "./NotEmptyCart";

function CartPage(props) {
  useEffect(() => {
    document.title = "Кошик";
  }, []);
  const { cartItems } = useSelector((state) => ({
    cartItems: state.cartFunctional.items,
  }));
  const isCartNotEmpty = cartItems.length === 0 ? false : true;

  return (
    <div className={classes.cartPage}>
      {isCartNotEmpty === true ? (
        <NotEmptyCart></NotEmptyCart>
      ) : (
        <EmptyCart></EmptyCart>
      )}
    </div>
  );
}
export default CartPage;

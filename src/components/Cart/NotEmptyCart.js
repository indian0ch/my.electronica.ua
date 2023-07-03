import { Fragment } from "react";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemRow from "./ItemRow";

function NotEmptyCart(props) {
  const { cartItems, cartSum, itemCount } = useSelector((state) => ({
    cartItems: state.cartFunctional.items,
    cartSum: state.cartFunctional.totelSum,
    itemCount: state.cartFunctional.totalCount,
  }));


  return (
    <Fragment>
      <div className={classes.cartHeader}>
        <h1>Ваш кошик</h1>
        <Link className={classes['cartHeader-link']} to="/">Продовжити покупки</Link>
      </div>
      <div className={classes.listContainer}>
        <table className={classes.listTable}>
          <div  className={classes["listTable-header"]}>
              <span>Товар</span>
              <span>Кількість</span>
              <span>Ціна</span>
          </div>
          <div className={classes["listTable-body"]}>
            {cartItems.map((item) => {
              return (
                <ItemRow
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  count={item.count}
                  color={item.color}
                  imageSrc={item.imageSrc}
                />
              );
            })}
          </div>
        </table>
      </div>
    </Fragment>
  );
}
export default NotEmptyCart;

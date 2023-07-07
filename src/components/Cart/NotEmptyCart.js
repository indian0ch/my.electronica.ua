import { Fragment } from "react";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemRow from "./ItemRow";
import { Button, Row } from "reactstrap";

function NotEmptyCart(props) {
  const { cartItems, cartSum } = useSelector((state) => ({
    cartItems: state.cartFunctional.items,
    cartSum: state.cartFunctional.totalSum,
  }));
  
  function onOrderHandler(event){
    event.preventDefault();
    
  }

  return (
    <div className="container-sm">
      <div className={classes.cartHeader}>
        <h1>Ваш кошик</h1>
        <Link className={classes["cartHeader-link"]} to="/">
          Продовжити покупки
        </Link>
      </div>
      <div className={classes.listContainer}>
          <div className={`${classes["listTable-header"]} row`}>
            <span className="col-8">Товар</span>
            <span className="col-4">Кількість</span>
            <span className="col-2">Ціна</span>
          </div>
          <div className={`${classes["listTable-body"]}`}>
            {cartItems.map((item) => {
              return (
                <ItemRow
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  count={item.count}
                  color={item.color}
                  imageSrc={item.imageSrc}
                />
              );
            })}
          </div>
      </div>
      <div className={classes.cartFooter}>
          <div className={classes["cartFooter-content"]}>
              <p>Сумарна вартість: {cartSum}грн</p>
              <Button className={classes["cartFooter-content-button"]} color='dark' size="lg" onClick={onOrderHandler}>Замовити</Button>
          </div>
      </div>
    </div>
  );
}
export default NotEmptyCart;

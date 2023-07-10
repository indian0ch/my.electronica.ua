import { useSelector } from "react-redux";
import classes from "./Order.module.css";
import OrderItemRow from "./OrderItemRow";

function OrderList(props) {
  return (
    <div className="">
      <h1>My electronica ua</h1>
      <OrderItemRow />
      <div className={classes.orderService}>
        <p>Вартість</p>
        <span>1727 грн</span>
      </div>
      <div className={classes.orderService}>
        <p>Доставка</p>
        <span>Розрахунок у відділенні служби доставки</span>
      </div>
      <div className={classes["orderCost-general"]}>
        <p>Загальна вартість</p>
        <span>1727 грн</span>
      </div>
    </div>
  );
}
export default OrderList;

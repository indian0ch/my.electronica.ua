import { useSelector } from "react-redux";
import classes from "./Order.module.css";
import OrderItemRow from "./OrderItemRow";

function OrderList(props) {
    
  return (
    <div className=''>
      <h1>My electronica ua</h1>

      <div className={classes.orderCost}>
          <p>Вартість</p>
          <p>1727 грн</p>
      </div>
      <div className={classes.delivery}>
          <p>Доставка</p>
          <p>Розрахунок у відділенні служби доставки</p>
      </div>
      <div className={classes['orderCost-general']}>
          <p>Загальна вартість</p>
          <p>1727 грн</p>
      </div>
    </div>
  );
}
export default OrderList;
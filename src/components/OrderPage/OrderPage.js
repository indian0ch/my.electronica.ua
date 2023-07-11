import { useEffect } from "react";
import classes from "./Order.module.css";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";
import { Row } from "reactstrap";
import { useSelector } from "react-redux";
import sendOrder from "./sendOrder";

function OrderPage(props) {
  useEffect(() => {
    document.title = 'Замовлення';
  }, []);
  const { cartItems, cartSum } = useSelector((state) => ({
    cartItems: state.cartFunctional.items,
    cartSum: state.cartFunctional.totalSum,
  }));

  function onConfirmClick(informObject) {
    sendOrder(informObject, cartItems, cartSum);
  }
  return (
    <div className={`${classes.orderPage} container-md`}>
      <Row>
        <h1>My electronica ua</h1>
        <div className="col-md-7 col-12 order-2 order-md-1">
          <OrderForm onConfirmClick={onConfirmClick}></OrderForm>
        </div>
        <div className={`col-md-5 col-12 order-1 order-md-2 border-start`}>
          <OrderList></OrderList>
        </div>
      </Row>
    </div>
  );
}
export default OrderPage;

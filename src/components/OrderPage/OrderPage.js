import classes from "./Order.module.css";
import { useSelector } from "react-redux";
import OrderForm from "./OrderForm";
import { Row } from "reactstrap";

function OrderPage(props) {
  return (
    <div className={`${classes.orderPage} container-md`}>
      <Row>
        <div className="col-md-7 col-12">
          <h1>My electronica ua</h1>
          <OrderForm></OrderForm>
        </div>
        <div className="col-md-5 col-12">
          {/* <OrderForm></OrderForm> */}
        </div>
      </Row>
    </div>
  );
}
export default OrderPage;

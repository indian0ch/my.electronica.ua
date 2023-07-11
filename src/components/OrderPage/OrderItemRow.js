import classes from "./Order.module.css";
import { Row } from "reactstrap";

function OrderItemRow(props) {
  return (
    <div className={`${classes.itemRow}`}>
      <Row>
        <div className={`${classes["itemRow-imagediv"]} col-3`}>
          <img
            className="col-10"
            src={require(`../../asserts/${props.imageSrc}`)}
          ></img>
        </div>
        <div className="d-flex align-items-center fw-bold col-7">
          <p>{props.name + " " + props.color}</p>
        </div>
        <div className="d-flex align-items-center col-2">
          {props.price * props.count} ₴
        </div>
      </Row>
    </div>
  );
}
export default OrderItemRow;

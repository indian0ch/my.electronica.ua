import { Fragment } from "react";
import classes from "./CardItem.module.css";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

function CardItem(props) {
  return (
    // <div className={`${classes.cardItem} col-xxl-3 col-lg-4  col-md-5 col-sm-6`}>
    //   <img
    //     src={require(`../../asserts/${props.src}`)}
    //     alt="Фотографія товару"
    //   ></img>
    //   <div className={classes["cardItem-body"]}>
    //     <p>{props.name}</p>
    //     <p>{props.price} грн.</p>
    //   </div>
    //   <div className={classes["cardItem-footer"]}>
    //     <button className="btn btn-outline-dark btn-lg" onClick={props.onClick}>Детальніше</button>
    //   </div>
    // </div>

    <Card
      style={{
        width: "18rem",
      }}
      className={`${classes.cardItem} col-xxl-3 col-lg-4 col-md-5 col-sm-8`}
    >
      <div className={classes.cardItemImg}>
        <img
          alt="Фотографія товару"
          src={require(`../../asserts/${props.src}`)}
        />
      </div>
      <CardBody>
        <CardTitle tag="h5">{props.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.price} грн.
        </CardSubtitle>
        <Button
          className={classes["cardItem-footer"]}
          onClick={props.onClick}
          block
          color="dark"
          outline
          size="lg"
        >
          Детальніше
        </Button>
      </CardBody>
    </Card>
  );
}
export default CardItem;

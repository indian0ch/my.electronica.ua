import classes from "./CardItem.module.css";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

function CardItem(props) {
  return (
    <Card className={`${classes.cardItem} col-xxl-3 col-lg-4 col-sm-5`}>
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

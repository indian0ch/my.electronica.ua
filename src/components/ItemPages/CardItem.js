import classes from "./CardItem.module.css";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "reactstrap";

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
        <NavLink href={`/${props.name}`}>
          <Button
            className={classes["cardItem-footer"]}
            block
            color="dark"
            outline
            size="lg"
          >
            Детальніше
          </Button>
        </NavLink>
        
      </CardBody>
    </Card>
  );
}
export default CardItem;

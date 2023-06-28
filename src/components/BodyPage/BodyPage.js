import { Fragment } from "react";
import classes from "./BodyPage.module.css";
import ITEMS from "../../asserts/items";
import CardItem from "../MainPageBody/CardItem";

function BodyPage(props) {
  function onClickCardHandler() {}

  const displayItems = ITEMS.map((item) => (
    <CardItem
      key={item.id}
      name={item.name}
      price={item.price}
      src={item.src}
      onClick={onClickCardHandler}
    ></CardItem>
  ));

  return (
    <Fragment>
      <div className={classes["body-section"]}>{displayItems}</div>
    </Fragment>
  );
}
export default BodyPage;

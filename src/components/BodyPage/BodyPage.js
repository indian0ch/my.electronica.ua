import { Fragment, useState, useEffect } from "react";
import classes from "./BodyPage.module.css";
import ITEMS from "../../asserts/items";
import CardItem from "../ItemPages/CardItem";
import ItemPage from "../ItemPages/ItemPage";

function BodyPage(props) {
  const [isItemOpen, setisItemOpen] = useState(false);
  const [displayItem, setDesplayItem] = useState();

  function onClickCardHandler(id) {
    setisItemOpen(true);
    const itemArr = ITEMS.filter((item) => item.id === id);
    const item = itemArr[0];
    setDesplayItem(
      <ItemPage
        name={item.name}
        price={item.price}
        src={item.src}
        description={item.description}
        link={item.videolink}
      />
    );
  }

  const displayItems = ITEMS.map((item) => (
    <CardItem
      key={item.id}
      name={item.name}
      price={item.price}
      src={item.src}
      onClick={() => onClickCardHandler(item.id)}
    ></CardItem>
  ));

  return (
    <Fragment>
      {isItemOpen === false ? (
        <div className={`${classes['body-section-items']} container-md`}>
          <div className="row">{displayItems}</div>
        </div>
      ) : (
        <div className={classes["body-section-item"]}>{displayItem}</div>
      )}
    </Fragment>
  );
}
export default BodyPage;

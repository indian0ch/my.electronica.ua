import ITEMS from "../../asserts/items";
import classes from "./BodyPage.module.css";
import CardItem from "../ItemPages/CardItem";

function ItemsListPage(props) {
  const displayItems = ITEMS.map((item) => (
    <CardItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      src={item.src}
      onClick={() => props.onClickCardHandler(item.id)}
    ></CardItem>
  ));

  return (
    <div className={`${classes["body-section-items"]} container-md`}>
      <div className="row">{displayItems}</div>
    </div>
  );
}
export default ItemsListPage;

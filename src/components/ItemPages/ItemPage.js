import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./ItemPage.module.css";
import ServiceItem from "./servicesItem";
import ColorButton from "../UI/chooseColorButton";
import VideoReview from "./VideoReview";
import { cartActions } from "../storage/cart-slice";
import { Accordion } from "reactstrap";
import serviceItemsArr from "../Services/ServicesItemList";
import ImageSlider from "./ImagesSlider";
import itemsImages from "../../asserts/items-images.js";

function ItemPage(props) {
  console.log(props.id);
  const dispatch = useDispatch();
  const [openService, setOpenService] = useState("0");

  const whichClrBtnActv = useSelector(
    (state) => state.colorChoosen.isColorActive
  );

  const toggleService = (id) => {
    if (openService === id) {
      setOpenService();
    } else {
      setOpenService(id);
    }
  };

  const paragraphs = props.description
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  function onAddToCartHandler(event) {
    event.preventDefault();
    dispatch(
      cartActions.addNewItem({
        name: props.name,
        price: props.price,
        count: 1,
        color: whichClrBtnActv,
        imageSrc: props.src,
      })
    );
  }

  return (
    <Fragment>
      <div className={`${classes["itemPage"]} container-lg`}>
        <div className={`col-6`}>
          <ImageSlider itemArray={itemsImages} id={props.id}/>
        </div>
        <div className={`${classes["itemPage-description"]} col-5`}>
          <div className={classes["itemPage-description-name"]}>
            <p>{props.name}</p>
          </div>
          <div className={classes["itemPage-description-price"]}>
            <p>{props.price} грн</p>
          </div>
          <div className={classes["itemPage-description-color"]}>
            <p>Оберіть колір:</p>
            <div>
              <ColorButton
                id="1"
                status={whichClrBtnActv === "1" ? true : false}
              >
                Чорний
              </ColorButton>
              <ColorButton
                id="2"
                status={whichClrBtnActv === "2" ? true : false}
              >
                Срібний
              </ColorButton>
              <ColorButton
                id="3"
                status={whichClrBtnActv === "3" ? true : false}
              >
                Рожевий
              </ColorButton>
            </div>
          </div>
          <div className={classes["itemPage-description-button"]}>
            <button className="btn btn-dark" onClick={onAddToCartHandler}>
              Додати в кошик
            </button>
          </div>
          <div className={classes["itemPage-description-dropboxes"]}>
            <Accordion open={openService} toggle={toggleService}>
              <ServiceItem
                targetId="1"
                accordionId="1"
                iconsrc="https://img.icons8.com/ios/50/card-in-use.png"
                name="Оплата"
                text={serviceItemsArr[0]}
              />
              <ServiceItem
                targetId="2"
                accordionId="2"
                iconsrc="https://img.icons8.com/ios/50/delivery--v1.png"
                name="Доставка"
                text={serviceItemsArr[1]}
              />
              <ServiceItem
                targetId="3"
                accordionId="3"
                iconsrc="https://img.icons8.com/fluency-systems-filled/48/u-turn-to-left.png"
                name="Обмін/повернення"
                text={serviceItemsArr[2]}
              />
            </Accordion>
          </div>
        </div>
      </div>
      <div className={`${classes["itemPage-description-text"]} container-lg`}>
        <h2>Опис:</h2>
        {paragraphs}
      </div>
      <div className='container-lg'>
        <VideoReview link={props.link}>Відео-огляд на {props.name}</VideoReview>
      </div>
    </Fragment>
  );
}
export default ItemPage;

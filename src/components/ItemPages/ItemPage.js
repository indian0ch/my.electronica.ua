import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./ItemPage.module.css";
import ServiceItem from "./servicesItem";
import ColorButton from "../UI/chooseColorButton";
import VideoReview from "./VideoReview";
import { cartActions } from "../storage/cart-slice";
import { Accordion, Row } from "reactstrap";
import serviceItemsArr from "../Services/ServicesItemList";
import ImageSlider from "./ImagesSlider";
import itemsImages from "../../asserts/items-images.js";
import { useParams } from "react-router-dom";
import ITEMS from "../../asserts/items";
import ModalAddItem from "./ModalAddItem";

function ItemPage(props) {
  const { itemName } = useParams();
  const requestItem = ITEMS.find((item) => item.name === itemName);
  const dispatch = useDispatch();
  const [openService, setOpenService] = useState("0");
  const [colorAttention, setColorAttention] = useState(false);
  useEffect(() => {
    document.title = itemName;
  }, []);

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
  const [modalAdd, setModalAdd] = useState(false);

  const toggleModalAdd = () => setModalAdd(!modalAdd);

  const paragraphs = requestItem.description
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  function checkColorName() {
    switch (whichClrBtnActv) {
      case "1": {
        return "Чорний";
      }
      case "2": {
        return "Срібний";
      }
      case "3": {
        return "Рожевий";
      }
    }
  }
  function onAddToCartHandler(event) {
    event.preventDefault();

    if (whichClrBtnActv !== 0 && requestItem.section === "Watches") {
      let colorItem = checkColorName();
      dispatch(
        cartActions.addNewItem({
          name: requestItem.name,
          price: requestItem.price,
          count: 1,
          color: colorItem,
          imageSrc: requestItem.src,
        })
      );
      setModalAdd(true);
    } else if (requestItem.section !== "Watches") {
      dispatch(
        cartActions.addNewItem({
          name: requestItem.name,
          price: requestItem.price,
          count: 1,
          color: "Стандартний колір",
          imageSrc: requestItem.src,
        })
      );
      setModalAdd(true);
    } else {
      setColorAttention(true);
      setTimeout(() => {
        setColorAttention(false);
      }, 3000);
    }
  }

  return (
    <Fragment>
      {modalAdd && (
        <ModalAddItem
          toggle={toggleModalAdd}
          modal={modalAdd}
          src={requestItem.src}
          name={requestItem.name}
          price={requestItem.price}
        />
      )}
      <div className={`${classes["itemPage"]} container-md`}>
        <Row>
          <div className="col-md">
            <ImageSlider
              itemArray={itemsImages}
              id={requestItem.id}
              key={requestItem.id}
            />
          </div>
          <div className={`${classes["itemPage-description"]}  col-md`}>
            <div className={classes["itemPage-description-name"]}>
              <p>{requestItem.name}</p>
            </div>
            <div className={classes["itemPage-description-price"]}>
              <p>{requestItem.price} грн</p>
            </div>
            {requestItem.section === "Watches" && (
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
                {colorAttention && (
                  <p className="my-4 fw-bold">Вибір кольору обовʼязковий</p>
                )}
              </div>
            )}
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
                  text={serviceItemsArr[0].text}
                />
                <ServiceItem
                  targetId="2"
                  accordionId="2"
                  iconsrc="https://img.icons8.com/ios/50/delivery--v1.png"
                  name="Доставка"
                  text={serviceItemsArr[1].text}
                />
                <ServiceItem
                  targetId="3"
                  accordionId="3"
                  iconsrc="https://img.icons8.com/fluency-systems-filled/48/u-turn-to-left.png"
                  name="Обмін/повернення"
                  text={serviceItemsArr[2].text}
                />
              </Accordion>
            </div>
          </div>
        </Row>
      </div>
      <div className={`${classes["itemPage-description-text"]} container-lg`}>
        <h2>Опис:</h2>
        {paragraphs}
      </div>
      <div className="container-lg">
        <VideoReview link={requestItem.videolink}>
          Відео-огляд на {requestItem.name}
        </VideoReview>
      </div>
    </Fragment>
  );
}
export default ItemPage;

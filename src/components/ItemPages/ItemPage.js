import { Fragment, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./ItemPage.module.css";
import ServiceItem from "./servicesItem";
import ColorButton from "../UI/chooseColorButton";
import VideoReview from "./VideoReview";
import { cartActions } from "../storage/cart-slice";

function reducerServices(state, action) {
  switch (action.type) {
    case "Payment_Change": {
      return {
        ...state,
        payment: !state.payment,
      };
    }
    case "Delivery_Change": {
      return {
        ...state,
        delivery: !state.delivery,
      };
    }
    case "Return_Change": {
      return {
        ...state,
        return: !state.return,
      };
    }
  }
}

function ItemPage(props) {
  const dispatch = useDispatch();

  const whichClrBtnActv = useSelector(
    (state) => state.colorChoosen.isColorActive
  );

  const [serviceState, dispatchService] = useReducer(reducerServices, {
    payment: false,
    delivery: false,
    return: false,
  });
  const paragraphs = props.description
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  function onAddToCartHandler(event) {
    event.preventDefault();
    dispatch(
      cartActions.addNewItem({
        name: "Smart Watch 8",
        price: 348,
        count: 2,
        color: "Black",
        imageSrc: "6s-main.jpeg",
      })
    );
  }

  return (
    <Fragment>
      <div className={classes["itemPage"]}>
        <div className={classes["itemPage-gallery"]}>
          <img
            src={require(`../../asserts/${props.src}`)}
            alt="Фотографія товару"
          ></img>
        </div>
        <div className={classes["itemPage-description"]}>
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
            <button onClick={onAddToCartHandler}>Додати в кошик</button>
          </div>
          <div className={classes["itemPage-description-dropboxes"]}>
            <ServiceItem
              classN="itemPage-description-dropboxes-payment"
              iconsrc="https://img.icons8.com/ios/50/card-in-use.png"
              status={serviceState.payment}
              dispatch={() => dispatchService({ type: "Payment_Change" })}
              name="Оплата"
            >
              <p style={{ width: "80%" }}>
                1.Післяплата – сплачуєте за товар при отриманні замовлення у
                відділенні пошти. Комісія 2% від Нової пошти)
                <br />
                <br />
                2.Повна/часткова оплата – онлайн, для оплати потрібно звʼязатись
                з менеджером для уточнення реквізитів оплати.
              </p>
            </ServiceItem>
            <ServiceItem
              classN="itemPage-description-dropboxes-delivery"
              iconsrc="https://img.icons8.com/ios/50/delivery--v1.png"
              status={serviceState.delivery}
              dispatch={() => dispatchService({ type: "Delivery_Change" })}
              name="Доставка"
            >
              <p style={{ width: "80%" }}>
                По Україні – від 1-3 дні. <br />
                <br />
                Доставка здійснюється по всьому світу, крім росії та білорусії.
                <br />
                <br /> Вартість – згідно з тарифами пошти.
              </p>
            </ServiceItem>
            <ServiceItem
              classN="itemPage-description-dropboxes-returning"
              iconsrc="https://img.icons8.com/fluency-systems-filled/48/u-turn-to-left.png"
              status={serviceState.return}
              dispatch={() => dispatchService({ type: "Return_Change" })}
              name="Обмін/повернення"
            >
              <div className={classes["service-return"]}>
                <p>
                  Якщо з якихось причин вам не підійшло замовлення, то ви можете
                  повернути товар протягом 14 календарних днів з дня отримання
                  товару, за умови якщо:
                </p>

                <ul>
                  <li>товар не був у використанні / вживанні;</li>
                  <li>
                    збережений товарний вид, споживчі властивості, ярлики.
                  </li>
                </ul>

                <p>Щоб повернути товар:</p>

                <ol>
                  <li>
                    Повідомте нас про бажання оформити повернення в Instagram,
                    Telegram, Viber або за номером: 0 (68) 508 78 67
                  </li>
                  <li>
                    Відправте товар за адресою вказаному в транспортній
                    накладній або уточніть у менеджера усі дані;
                  </li>
                  <li>Повідомте реквізити карти для повернення суми.</li>
                </ol>

                <p>
                  Термін повернення грошових коштів – до 10 календарних днів з
                  дати надходження поверненого товару.
                </p>

                <p>Щоб обміняти товар:</p>

                <ol>
                  <li>
                    Відправте товар за адресою вказаному в транспортній
                    накладній або уточніть у менеджера усі дані;
                  </li>
                  <li>
                    Повідомте нам модель і розмір на який хочете здійснити
                    обмін.
                  </li>
                </ol>

                <p>
                  Комплектація замовлення на обмін здійснюється після отримання
                  повернення від вас.
                </p>

                <p>
                  У разі, якщо вам прийшла не та модель (розмір, колір), яку ви
                  замовили – ми оплачуємо витрати за пересилку повернення.
                </p>

                <p>
                  Якщо розмір на товарі вказаний такий, який ви замовили, але
                  товар не підійшов – витрати за пересилку оплачуєте ви.
                </p>
              </div>
            </ServiceItem>
          </div>
        </div>
      </div>
      <div className={classes["itemPage-description-text"]}>
        <h2>Опис:</h2>
        {paragraphs}
      </div>
      <div>
        <VideoReview link={props.link}>Відео-огляд на {props.name}</VideoReview>
      </div>
    </Fragment>
  );
}
export default ItemPage;

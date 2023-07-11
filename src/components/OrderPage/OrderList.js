import { useSelector } from "react-redux";
import OrderItemRow from "./OrderItemRow";

function OrderList(props) {
  const { cartItems, cartSum } = useSelector((state) => ({
    cartItems: state.cartFunctional.items,
    cartSum: state.cartFunctional.totalSum,
  }));
  const orderedItems = cartItems.map((item) => (
    <OrderItemRow
      key={item.name + item.color}
      name={item.name}
      count={item.count}
      price={item.price}
      color={item.color}
      imageSrc={item.imageSrc}
    ></OrderItemRow>
  ));
  return (
    <div className="container-fluid my-3">
      <h2>Замовлення:</h2>
      {orderedItems}
      <div>
        <div className="d-flex justify-content-between">
          <p>Вартість:</p>
          <span>{cartSum} ₴</span>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <p>Доставка:</p>
          <span>Розрахунок у відділенні служби доставки</span>
        </div>
      </div>
      <div className=" fw-bold fs-5">
        <div className="d-flex justify-content-between">
          <p>Загальна вартість:</p>
          <span>
            <small className="text-muted fs-6">UAH</small> {cartSum},00 ₴
          </span>
        </div>
      </div>
    </div>
  );
}
export default OrderList;

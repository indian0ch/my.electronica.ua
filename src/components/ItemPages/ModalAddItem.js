import { Button, Modal, ModalHeader, ModalBody, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

function ModalAddItem(props) {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle} centered={true}>
      <ModalHeader toggle={props.toggle}>Товар доданий до кошика</ModalHeader>
      <ModalBody className="container-sm">
        <Row>
          <div className="col-4">
            <img
              alt="Фотографія товару"
              src={require(`../../asserts/${props.src}`)}
              className="w-100 h-100"
            ></img>
          </div>
          <div className="col-8 primary">
            <p className="fw-bold">{props.name}</p>
            <p>{props.price}₴</p>
            <p>{props.color}</p>
          </div>
        </Row>
      </ModalBody>
      <div className="bg-dark">
        <div className="d-flex justify-content-between m-3">
          <Button color="secondary border fw-bold" onClick={props.toggle}>
            Продовжити покупки
          </Button>
          <NavLink
            to="/cart/order"
            className="text-decoration-none"
            onClick={props.toggle}
          >
            <Button color="success fw-bold" onClick={props.toggle}>
              Оформлення замовлення
            </Button>
          </NavLink>
        </div>
        <div className="m-3">
          <NavLink to="/cart" className="d-flex" onClick={props.toggle}>
            <Button color="light fw-bold w-100" onClick={props.toggle}>
              В кошик
            </Button>
          </NavLink>
        </div>
      </div>
    </Modal>
  );
}

export default ModalAddItem;

import { useRef, useState, useReducer } from "react";
import classes from "./Order.module.css";
import {
  Form,
  Row,
  Col,
  Input,
  Label,
  FormFeedback,
  FormGroup,
  Button,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";

function contactReducer(state, action) {
  switch (action.type) {
    case "change_name": {
      return {
        ...state,
        isNameValid: action.status,
      };
    }
    case "change_surname": {
      return {
        ...state,
        isSurnameValid: action.status,
      };
    }
    case "change_phone": {
      return {
        ...state,
        isPhoneValid: action.status,
      };
    }
    case "change_postNumber": {
      return {
        ...state,
        isPostNumberValid: action.status,
      };
    }
    case "change_city": {
      return {
        ...state,
        isCityValid: action.status,
      };
    }
  }
}

function OrderForm(props) {
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const nameRef = useRef();
  const surnameRef = useRef();
  const postNumberRef = useRef();
  const cityRef = useRef();
  const phoneRef = useRef();
  const paymentWayRef = useRef();
  const deliveryWayRef = useRef();
  const [contactState, dispatchContact] = useReducer(contactReducer, {
    isNameValid: false,
    isSurnameValid: false,
    isPhoneValid: false,
    isPostNumberValid: false,
    isCityValid: false,
  });

  function checkValidation() {
    let status = true;
    const fieldsToValidate = [
      { ref: nameRef, type: "change_name" },
      { ref: surnameRef, type: "change_surname" },
      { ref: cityRef, type: "change_city" },
      { ref: phoneRef, type: "change_phone" },
      { ref: postNumberRef, type: "change_postNumber" },
    ];
    fieldsToValidate.forEach((field) => {
      if (field.ref.current.value === "") {
        dispatchContact({ type: field.type, status: true });
        status = false;
      }
    });
    return status;
  }

  function onConfirmClick(event) {
    event.preventDefault();
    setIsLoadingBtn(true);
    setTimeout(() => {
      setIsLoadingBtn(false);
    }, 1000);
    const status = checkValidation();
    if (status) {
      props.onConfirmClick({
        name: nameRef.current.value,
        surname: surnameRef.current.value,
        city: cityRef.current.value,
        phoneNumber: phoneRef.current.value,
        postWay: deliveryWayRef.current.value,
        postNumber: postNumberRef.current.value,
        paymentWay: paymentWayRef.current.value,
      });
    }
  }

  return (
    <Form>
      <h4>Контактна інформація</h4>
      <Row>
        <Col>
          <FormGroup floating>
            <Input
              id="contactName"
              innerRef={nameRef}
              name="name"
              type="text"
              invalid={contactState.isNameValid}
              onClick={() =>
                dispatchContact({ type: "change_name", status: false })
              }
            />
            <Label for="contactPhone">Імʼя</Label>
            <FormFeedback>Це поле є обовʼязковим для заповнення</FormFeedback>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup floating>
            <Input
              id="contactSurname"
              innerRef={surnameRef}
              name="surname"
              type="text"
              invalid={contactState.isSurnameValid}
              onClick={() =>
                dispatchContact({ type: "change_surname", status: false })
              }
            />
            <Label for="contactPhone">Прізвище</Label>
            <FormFeedback>Це поле є обовʼязковим для заповнення</FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup floating>
            <Input
              id="contactPhone"
              innerRef={phoneRef}
              name="phoneNumber"
              type="tel"
              invalid={contactState.isPhoneValid}
              onClick={() =>
                dispatchContact({ type: "change_phone", status: false })
              }
            />
            <Label for="contactPhone">Номер телефону</Label>
            <FormFeedback>Це поле є обовʼязковим для заповнення</FormFeedback>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup floating>
            <Input
              id="contactCity"
              innerRef={cityRef}
              name="city"
              type="text"
              invalid={contactState.isCityValid}
              onClick={() =>
                dispatchContact({ type: "change_city", status: false })
              }
            />
            <Label for="contactPhone">Місто</Label>
            <FormFeedback>Це поле є обовʼязковим для заповнення</FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup floating>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
          innerRef={deliveryWayRef}
        >
          <option value="Укрпошта">Укрпошта</option>
          <option value="Нова пошта">Нова пошта</option>
        </Input>
        <Label for="contactPhone">Служба доставки</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="contactPostNumber"
          innerRef={postNumberRef}
          name="postNumber"
          type="text"
          invalid={contactState.isPostNumberValid}
          onClick={() =>
            dispatchContact({ type: "change_postNumber", status: false })
          }
        />
        <Label for="contactPhone">Номер відділення</Label>
        <FormFeedback>Це поле є обовʼязковим для заповнення</FormFeedback>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
          innerRef={paymentWayRef}
        >
          <option value="Накладний платіж">
            Накладний платіж (2% комісії на пошті)
          </option>
          <option value="Мінімальна предоплата">
            Мінімальна предоплата (100 грн)
          </option>
          <option value="Повна предоплата">Повна предоплата</option>
        </Input>
        <Label for="contactPhone">Спосіб оплати</Label>
      </FormGroup>
      <div className={classes["form-control"]}>
        <Link to="/cart">Повернутись в кошик</Link>
        <Button onClick={onConfirmClick} color="primary" size="lg">
          {isLoadingBtn === true ? (
            <Spinner size="sm" color="light" />
          ) : (
            "Підтвердити замовлення"
          )}
        </Button>
      </div>
    </Form>
  );
}
export default OrderForm;

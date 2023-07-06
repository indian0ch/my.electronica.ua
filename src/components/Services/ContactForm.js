import { useRef, useState } from "react";
import {
  FormGroup,
  Form,
  Label,
  Input,
  FormFeedback,
  Row,
  Col,
  Button,
} from "reactstrap";

function ContactForm(props) {
  const emailRef = useRef(null);
  const numberRef = useRef();
  const nameRef = useRef();
  const textRef = useRef();
  const [isPhoneAdded, setIsPhoneAdded] = useState(false);

  function onChangeInput() {
    setIsPhoneAdded(false);
  }
  function checkValidation() {
    if (numberRef.current.value === "") {
      setIsPhoneAdded(true);
      return false;
    }
    return true;
  }
  function cleanInput() {
    nameRef.current.value = "";
    emailRef.current.value = "";
    numberRef.current.value = "";
    textRef.current.value = "";
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    if (checkValidation()) {
      props.sendMessage({
        name: nameRef.current.value,
        email: emailRef.current.value,
        phoneNumber: numberRef.current.value,
        text: textRef.current.value,
      });
      setTimeout(() => {
        cleanInput();
      }, 1000);
    }
  }

  return (
    <Form onSubmit={onSubmitHandler} className="col-md-8 col-12 mx-auto">
      <Row>
        <Col md={6}>
          <FormGroup className="col-sm" floating>
            <Input
              id="contactName"
              innerRef={nameRef}
              name="name"
              placeholder="Імʼя"
              type="name"
            />
            <Label for="contactName">Імʼя</Label>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup className="col-sm" floating>
            <Input
              id="contactEmail"
              innerRef={emailRef}
              name="email"
              placeholder="Email"
              type="email"
            />
            <Label for="contactEmail">Email</Label>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup floating>
        <Input
          id="contactPhone"
          innerRef={numberRef}
          name="phoneNumber"
          placeholder="Email"
          type="tel"
          invalid={isPhoneAdded}
          onChange={onChangeInput}
        />
        <Label for="contactPhone">Номер телефону</Label>
        <FormFeedback>Це поле є обовʼязковим для заповнення</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Текст повідомлення</Label>
        <Input
          id="exampleText"
          innerRef={textRef}
          name="text"
          type="textarea"
        />
      </FormGroup>
      <Button color="primary" size="lg" type="submit">
        Надіслати
      </Button>
    </Form>
  );
}
export default ContactForm;

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalSuccessOrder(props) {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle} centered={true}>
      <ModalHeader toggle={props.toggle}>
        Дякуємо за ваше замовлення!
      </ModalHeader>
      <ModalBody>
        Наша команда працює над його виконанням та якнайшвидшої доставкою до
        вас. Якщо у вас виникнуть будь-які питання або потреба в додатковій
        інформації, будь ласка, не соромтеся зв'язатися з нашою службою
        підтримки. Дякуємо за те, що обрали наш магазин, і ми сподіваємося на
        подальшу співпрацю з вами.
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.toggle}>
          Ok
        </Button>{" "}
        <Button color="secondary" onClick={props.toggle}>
          Закрити
        </Button>
      </ModalFooter>
    </Modal>
  );
}
export default ModalSuccessOrder;

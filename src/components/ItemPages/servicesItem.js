import { Fragment } from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

function ServiceItem(props) {

  return (
    <Fragment>
      <AccordionItem>
        <AccordionHeader targetId={props.targetId}>
          <img width="50" height="50" src={props.iconsrc} alt="delivery--v1" />
          <p>{props.name}</p>
        </AccordionHeader>
        <AccordionBody accordionId={props.accordionId}>
          {props.text}
        </AccordionBody>
      </AccordionItem>
    </Fragment>
  );
}

export default ServiceItem;

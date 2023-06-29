import { Fragment } from "react";
import classes from "./ItemPage.module.css";

function ServiceItem(props) {
  const flipArrowStyle = { transform: "scaleY(-1)" };

  return (
    <Fragment>
      <a onClick={props.dispatch}>
        <div className={classes[props.classN]}>
          <div>
            <img
              width="50"
              height="50"
              src={props.iconsrc}
              alt="delivery--v1"
            />
            <p>{props.name}</p>
            <img
              style={props.status ? flipArrowStyle : null}
              width="32"
              height="32"
              src="https://img.icons8.com/windows/32/expand-arrow--v2.png"
              alt="expand-arrow--v2"
            />
          </div>
        </div>
        {props.status && props.children}
      </a>
    </Fragment>
  );
}

export default ServiceItem;

import { useDispatch } from "react-redux";
import classes from "./button.module.css";
import { colorChoosenActions } from "../storage/colorChoose-slice";

function ColorButton(props) {
  const dispatch = useDispatch();
  const clickedButton = { color: "white", backgroundColor: "black" };

  function onClickColorHandler() {
    dispatch(colorChoosenActions.changeButtonId(props.id));
  }

  return (
    <button
      style={props.status ? clickedButton : null}
      className={classes.buttonColor}
      onClick={onClickColorHandler}
    >
      {props.children}
    </button>
  );
}
export default ColorButton;

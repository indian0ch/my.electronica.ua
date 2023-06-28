import { Fragment } from "react";
import classes from "./Footer.module.css";

function Footer(props) {
  return (
    <footer className={classes["footer"]}>
      <p>Copyright &copy; Powered by kyivskuy</p>
    </footer>
  );
}
export default Footer;

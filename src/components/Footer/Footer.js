import { Fragment } from "react";
import classes from "./Footer.module.css";

function Footer(props) {
  return (
    <footer className={classes["footer"]}>
      <p>Copyright &copy; 2023, My Electronica Ua - Магазин електронних аксесуарів. Всі права захищені Powered by kyivskuy</p>
    </footer>
  );
}
export default Footer;

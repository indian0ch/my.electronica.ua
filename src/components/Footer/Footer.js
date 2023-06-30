import { Fragment } from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-description"]}>
          <Link to="">Про нас</Link>
          <Link to="">Контаксти</Link>
          <Link to="">Умови обслуговування</Link>
          <Link to="">Оплата, доставка, повернення коштів</Link>
        </div>
        <div className={classes["footer-contact"]}>
          <h2>Графік роботи</h2>
          <p>Без вихідних</p>
          <p>08:00 - 20:00</p>
          <p>+380 (68) 508 78 67</p>
          <p>fesiukandrey@gmail.com</p>
        </div>
      </div>
      <p>
        &copy; 2023, My Electronica Ua - Магазин електронних аксесуарів. Всі
        права захищені Powered by kyivskuy
      </p>
    </footer>
  );
}
export default Footer;

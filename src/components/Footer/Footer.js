import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-description"]}>
          <h2>Дізнатись більше про My Electronica:</h2>
          <div className={classes["footer-description-links"]}>
            <Link to="/about" className={classes.link}>Про нас</Link>
            <Link to="" className={classes.link}>Контакти</Link>
            <Link to="terms-of-service" className={classes.link}>Умови обслуговування</Link>
            <Link to="/refund-policy" className={classes.link}>Оплата, доставка, повернення коштів</Link>
          </div>
        </div>
        <div className={classes["footer-contact"]}>
          <h2>Графік роботи</h2>
          <p>Без вихідних </p>
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

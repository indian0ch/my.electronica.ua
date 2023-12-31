import { useEffect } from "react";
import classes from "./services.module.css";

function AboutUs(props) {
  useEffect(() => {
    document.title = 'Про нас';
  }, []);
  return (
    <div className={`${classes.aboutUs} container-md my-5`}>
      <h1>Про нас</h1>
      <p>
        My electronica ua - це український інтернет-магазин електроніки,
        спеціалізований на навушниках та смарт-годинниках.
      </p>
      <p>
        Смарт-годинники поєднують в собі функціональність звичайних годинників
        із додатковими можливостями, такими як відстеження активності,
        відображення повідомлень та додатків, контроль за здоров'ям і фітнесом
        та багато іншого.
      </p>
      <p>
        Наш магазин пропонує тільки якісну та надійну продукцію. Ми прагнемо
        забезпечити нашим клієнтам надійність, якість і задоволення від покупки.
      </p>
    </div>
  );
}
export default AboutUs;

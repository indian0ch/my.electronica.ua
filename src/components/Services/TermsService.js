import { useEffect } from "react";
import classes from "./services.module.css";

function TermsService(props) {
  useEffect(() => {
    document.title = 'Умови обслуговування';
  }, []);
  return (
    <div className={`${classes.aboutUs} container-md my-5`}>
      <h1>Умови обслуговування</h1>
      <p>
        Інтернет-сайт My Electronica Ua, далі іменований “Продавець”, пропонує
        будь-якій фізичній особі, що далі іменується “Покупець”, розмістити
        замовлення на купівлю товарів розміщених на офіційному інтернет – сайті
        https://indian0ch.github.io/my.electronica.ua (далі – Інтернет-сайт,
        сайт) і здійснити купівлю таких товарів на умовах вказаних в цьому
        договорі і погоджених в замовленні.
      </p>
      <p>
        Оформляючи замовлення на сайті, Покупець добровільно підтверджує
        прийняття нижченаведених положень :
      </p>
      <ul>
        <li>ЗАГАЛЬНІ ПОЛОЖЕННЯ</li>
        <p>
          1.1. Цей договір є публічною офертою і не вимагає підписання
          (відповідно до ст.ст. 633, 641 і гл. 63 Цивільного кодексу України).
          Угода публічної оферти (електронний договір) має таку ж юридичну силу
          як договір, складений у письмовій формі і підписаний сторонами. Цей
          договір містить усі істотні умови виготовлення і купівлі-продажу
          товару дистанційним способом, т. е. через мережу Інтернет, що виключає
          можливість безпосереднього ознайомлення Покупця з Товаром до його
          отримання.
        </p>
        <p>
          1.2. У разі прийняття умов цього договору (тобто публічної оферти
          інтернет-сайту), громадянин, що виробляє акцепт оферти, стає Покупцем.
          Акцептом є факт оформлення замовлення на купівлю товару.
        </p>
        <p>
          1.3. Продавець здійснює продаж товару, розміщеному на Інтернет-сайті –
          одяг і аксесуари через інтернет-магазин
          https://indian0ch.github.io/my.electronica.ua
        </p>
        <p>
          1.4. Продавець залишає за собою право вносити зміни в цей Договір без
          попереднього повідомлення Покупця, шляхом викладу його на сайті.
        </p>
        <li>УМОВИ ЗАМОВЛЕННЯ ТА ДОСТАВКИ</li>
        <p>
          2.1. Для оформлення замовлення Покупець проходить автоматичну
          реєстрацію на сайті.
        </p>
        <p>
          2.2. Покупець здійснює замовлення товарів по каталогу на сайті і
          відправляє його Продавцеві. Покупець зобов’язується правильно вказати
          в замовленні свої прізвище, ім’я, телефон для зв’язку, включаючи код
          міста, точна адреса доставки і запитувані формою замовлення дані.
        </p>
        <p>
          2.3. У разі виникнення у Покупця питань, які торкаються властивостей і
          характеристик товарів, перед оформленням замовлення Покупець може
          звернутися до Продавця будь-яким доступним способом.
        </p>
        <p>
          2.4. Доставка товарів здійснюється по усій території України, а також
          за рубіж. Продавець докладе усі зусилля для дотримання термінів
          доставки, погоджених з Покупцем. Проте, затримки в доставці можливі
          зважаючи на непередбачені обставини, що сталися не з вини Продавця.
        </p>
        <p>
          2.5. Доставка товарів здійснюється до складів транспортних компаній
          (вказаних при оформленні замовлення), де проводиться видача товарів,
          якщо інші умови доставки не погоджені сторонами в замовленні. Вартість
          доставки товарів по території України і за рубіж оплачується Покупцем
          згідно з тарифами транспортних компаній.
        </p>
        <p>
          2.6. Покупець зобов’язується забрати товар в пункті доставки (чи
          безпосередньо у кур’єра), вказаному в замовленні. При отриманні
          замовлення на складі транспортної компанії або від кур’єра Покупець
          повинен перевірити посилку. Якщо після розкриття виявлена недостача,
          підміна або ушкодження товару, то Покупець повинен скласти Акт і
          повідомити про проблему Продавцеві. Інакше Продавець не несе
          відповідальність за можливе ушкодження або розкрадання посилки.
        </p>
        <p>
          2.7. Покупець оплачує замовлення способом, вибраним в
          інтернет-магазині і погодженим у момент оформлення замовлення. Оплата
          може здійснюватися безготівковим розрахунком шляхом передоплати.
        </p>
        <li>ПРАВА ТА ОБОВ’ЯЗКИ СТОРІН</li>
        <p>
          3.1. Покупець має право оформити замовлення на умовах цього договору.
        </p>
        <p>3.2. Покупець має право на якісний товар.</p>
        <p>
          3.3. Покупець зобов’язується своєчасно отримати і сплатити товар на
          умовах цього договору і оформленого замовлення.
        </p>
        <p>
          3.4. Продавець зобов’язується поставити товар відповідно до отриманого
          замовлення, в кількості, цінам і термінам, погодженим з Покупцем.
        </p>
        <p>
          3.5. Продавець гарантує відповідність зовнішнього вигляду товарів їх
          зразкам в каталозі, при цьому заявлений на сайті зовнішній вигляд
          товару може незначно відрізнятися від зразка.
        </p>
        <p>
          3.6. Продавець не несе відповідальності за точність і правильність
          інформації, що надається Покупцем при оформленні замовлення.
        </p>
        <li>ВАРТІСТЬ ТОВАРІВ</li>
        <p>4.1. Вартість товарів вказана в каталозі на сайті.</p>
        <p>
          4.2. Ціна товару на сайті може бути змінена Продавцем в
          односторонньому порядку.
        </p>
        <p>
          4.3. У вартість товару не входить вартість доставки, яка оплачується
          додатково.
        </p>
        <p>
          4.4. Оплата товару здійснюється Покупцем після оформлення замовлення в
          порядку передбаченому п. 2.8. Договору.
        </p>
        <li>ПОВЕРНЕННЯ ТОВАРУ І ВІДПОВІДАЛЬНІСТЬ СТОРІН</li>
        <p>
          5.1. Повернення товару здійснюється згідно чинного законодавства
          України. Не підлягають обміну (поверненню) товари належної якості,
          перелік яких затверджений постановою КМУ від 19.03.94 р. № 172.
        </p>
        <p>
          5.2. У разі виявлення браку, Покупець зобов’язується повідомити про це
          Продавця в строк 14 днів з моменту доставки замовлення. Для
          підтвердження дефекту товар передається на експертизу Продавцеві. У
          позитивному випадку Покупцеві на його вибір відшкодовується повна
          вартість товару або товар підлягає заміні на товар належної якості.
        </p>
        <p>
          5.3. Неправильний догляд або нецільове використання товару, яке
          привело до його поломки, не являється браком, і товари з такими
          дефектами поверненню не підлягаються.
        </p>
        <p>
          5.4. Продавець не несе відповідальність: за незначну невідповідність
          кольорової гамми товару, що може відрізнятися від зразка товару на
          сайті виключно із-за різної колірної передачі моніторів персональних
          комп’ютерів або екранів смартфонів різних моделей; за зміст і
          достовірність інформації, що надається Покупцем при оформленні
          замовлення; за затримку і перебої в наданні послуг транспортною
          компанією; за затримку в наданні послуг Продавцем, які відбуваються з
          причин незалежним від Продавця (перебої в роботі мережі Інтернет і
          тому подібне); за будь-які протиправні дії, здійснювані Покупцем і
          третіми особами у рамках цього договору.
        </p>
        <p>
          5.5. Покупець, використовуючи наданий йому доступ до мережі Інтернет
          самостійно несе відповідальність за шкоду, заподіяну його діями іншим
          особам, їх майну, інтересам, державі або моральним засадам
          суспільства.
        </p>
        <p>
          5.6. У разі настання обставин непереборної сили, сторони звільняються
          від виконання умов цього договору. Під обставинами непереборної сили
          для цілей цього договору розуміються події, що мають надзвичайний,
          непередбачений характер, які виключають або об’єктивно заважають
          виконанню цього договору, настання яких Сторони не могли передбачати і
          запобігти розумними способами.
        </p>
        <li>ІНШІ УМОВИ</li>
        <p>
          6.1. До відносин між Покупцем і Продавцем застосовується право
          України.
        </p>
        <p>
          6.2. Інтернет-магазин залишає за собою право в односторонньому порядку
          вносити зміни в цей договір за умови попередньої публікації його на
          сайті https://indian0ch.github.io/my.electronica.ua
        </p>
        <p>
          6.3. При здійсненні акцепту (оформленні замовлення) Покупець надає
          Продавцеві свою беззастережну згоду на збір, обробку, зберігання,
          використання своїх персональних даних, в розумінні ЗУ “Про захист
          персональних даних”.
        </p>
        <p>
          6.4. Оформлення на Інтернет-сайті замовлення означає повну згоду
          Покупця з умовами договору купівлі-продажу (публічної оферти).
        </p>
        <p>
          6.5. Фактичною датою електронної угоди між сторонами є дата прийняття
          умов, відповідно до ст. 11 Закону України “Про електронну комерцію”.
        </p>
        <p>
          6.6. Використання ресурсу Інтернет-сайту для попереднього перегляду
          товару, а також для оформлення замовлення для Покупця є безкоштовним.
        </p>
        <p>
          6.7. Інформація, що надається Покупцем є конфіденційною. Інтернет-сайт
          використовує інформацію про Покупця виключно в цілях обробки
          замовлення, відправлення повідомлень Покупцеві, доставки товару,
          здійснення взаєморозрахунків та ін. Уся інформація, надана Покупцем
          Продавцеві, не може бути передана для ознайомлення і/або використання
          третім особам, за винятком письмового дозволу Покупця на передачу цієї
          інформації і випадків, коли цього вимагає український або міжнародний
          законодавство і/або орган влада з дотримання законної процедури.
        </p>
        <p>
          6.8. У разі виникнення питань і претензій з боку Покупця він повинен
          звернутися до Продавця будь-яким доступним способом. Всі суперечки
          сторони намагатимуться вирішити шляхом переговорів. При неможливості
          досягти угоди суперечка буде передана на розгляд в судовий орган
          відповідно до чинного законодавства України.
        </p>
        <li>ТЕРМІН ДІЇ ДОГОВОРУ</li>
        <p>
          7.1. Електронний договір вважається укладеним з моменту отримання
          особою що направила пропозицію укласти такий договір, відповіді про
          прийняття цієї пропозиції в порядку, визначеному частиною шостої
          статті 11 Закону України “Про електронну комерцію”.
        </p>
        <p>
          7.2. До закінчення терміну дії цей Договір може бути розірваний по
          взаємній згоді сторін до моменту фактичної доставки товару.
        </p>
        <p>
          7.3. Сторони мають право розірвати цей договір в односторонньому
          порядку, у разі невиконання однієї із сторін умов цього Договору і у
          випадках передбачених чинним законодавством України.
        </p>
      </ul>
    </div>
  );
}
export default TermsService;

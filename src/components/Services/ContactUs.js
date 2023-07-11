import { useEffect } from "react";
import classes from "./services.module.css";
import ContactForm from "./ContactForm";

function Contact(props) {
  useEffect(() => {
    document.title = 'Контакти';
  }, []);
  function sendMessage(message) {
    console.log(message);
    let tg = {
      token: "5855579399:AAFwa7JV6xt8kj7FhhmhEfHwMlCzQqb0ieI",
      chat_id: "-1001876151539",
    };

    const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;
    const obj = {
      chat_id: tg.chat_id,
      text: `Імʼя:${message.name}\n Номер телефону: ${message.phoneNumber}\n Еmail: ${message.email}\n Повідомлення: ${message.text}`,
    };

    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(obj),
    })
      .then(function (res) {
        alert("Form data was send");
      })
      .catch(function (res) {
        alert(res.error);
      });
  }

  return (
    <div className={`${classes["contact-container"]} container-md my-5`}>
      <div className="col-md-8 col-12 mx-auto">
        <h2>Звʼяжіться з нами</h2>
        <div className="my-4">
        <span>+38-068-508-78-67</span><br></br>
        <span>fesiukandrey@gmail.com</span>
        </div>
      </div>
      <ContactForm sendMessage={sendMessage} />
    </div>
  );
}
export default Contact;

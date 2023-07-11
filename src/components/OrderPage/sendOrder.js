function sendOrder(informObject, cartItems, cartSum) {
  let tg = {
    token: "5855579399:AAFwa7JV6xt8kj7FhhmhEfHwMlCzQqb0ieI",
    chat_id: "-1001876151539",
  };

  let itemsMessage = "";
  cartItems.forEach((item) => {
    const message = `Товар:${item.name}\n Кількість:${item.count}\n Колір:${item.color}\n`;
    itemsMessage += message;
  });

  const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;
  const obj = {
    chat_id: tg.chat_id,
    text:
      `Замовлення\n Імʼя:${informObject.name}\n Прізвище:${informObject.surname}\n Номер телефону: ${informObject.phoneNumber}\n Місто: ${informObject.city}\n Пошта: ${informObject.postWay}\n Номер відділення: ${informObject.postNumber}\n Оплата: ${informObject.paymentWay}\n Сума: ${cartSum}\n Items:\n` +
      itemsMessage,
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

export default sendOrder;

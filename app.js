
const catalog = document.getElementById('catalog');
const products = [
  { name: "Кровать двухъярусная", price: "10 900 ₽" },
  { name: "Кровать одноярусная", price: "8 700 ₽" }
];

products.forEach(p => {
  const div = document.createElement('div');
  div.innerHTML = `<h3>${p.name}</h3><p>${p.price}</p><button onclick="buy('${p.name}')">Купить</button>`;
  catalog.appendChild(div);
});

function buy(name) {
  const form = {
    name: prompt("Ваше имя:"),
    phone: prompt("Телефон:"),
    address: prompt("Адрес доставки:")
  };
  fetch('/api/send-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product: name, ...form })
  }).then(() => alert('Заказ отправлен!'));
}

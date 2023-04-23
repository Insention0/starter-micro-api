const name = document.getElementById('name');
const exp = document.getElementById('exp');
const cvv = document.getElementById('CVV');
const card = document.getElementById('cardnb');
const btn = document.getElementById('submit');

btn.addEventListener('click', () => {
  const data = {
    name: name.value,
    cardnb: card.value,
    CVV: cvv.value,
    exp: exp.value
  };

  fetch('https://long-teal-pike-tutu.cyclic.app/submit', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

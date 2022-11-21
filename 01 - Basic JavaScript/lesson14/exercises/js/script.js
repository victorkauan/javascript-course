const number = Number(prompt('Enter a number:'));

const titleNumber = document.getElementById('title-number');
const text = document.getElementById('text');

titleNumber.innerHTML = number;

text.innerHTML = `<p>Square root: ${number ** (1 / 2)}.</p>`;
text.innerHTML += `<p>Is ${number} integer: ${Number.isInteger(number)}.</p>`;
text.innerHTML += `<p>is NaN ("Not a Number"): ${Number.isNaN(number)}.</p>`;
text.innerHTML += `<p>Rounding down: ${Math.floor(number)}.</p>`;
text.innerHTML += `<p>Rounding up: ${Math.ceil(number)}.</p>`;
text.innerHTML += `<p>With two decimal places: ${number.toFixed(2)}.</p>`;

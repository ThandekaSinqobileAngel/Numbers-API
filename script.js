const form = document.querySelector('form');
const factDiv = document.querySelector('.number-fact');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const loadText = 'Wait a little bit ⌛️';
  factDiv.innerHTML = loadText;
  const number = e.target.querySelector('input[type="number"]').value;
  const baseUrl = 'http://numbersapi.com/';
  fetch(baseUrl + number)
    .then(response => response.text())
    .then(text => factDiv.innerHTML = text) 
})
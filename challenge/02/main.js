const calculateButton = document.querySelector('#calcular');
const result = document.querySelector('.resultado');

calculateButton.addEventListener('click', () => {
  result.innerHTML = 'Fui clicado';
});
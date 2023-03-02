const robotron = document.querySelector('#robotron');
const colorControls = {
  incrementColorButton: document.querySelector('[data-control-color="+"]'),
  decrementColorButton: document.querySelector('[data-control-color="-"]'),
}
const colors = ['#0000ff', '#ffff00','#ffffff', '#000000', '#ff00ff', '#ff0000'];
const currentColor = document.querySelector('[data-color]');
const images = {
  '#0000ff': './img/robotron/robotron-azul.png',
  '#ffff00': './img/robotron/robotron-amarelo.png', 
  '#ffffff': './img/robotron/robotron-branco.png', 
  '#000000': './img/robotron/robotron-preto.png', 
  '#ff00ff': './img/robotron/robotron-rosa.png', 
  '#ff0000': './img/robotron/robotron-vermelho.png',
};
const indexColor = document.querySelector('[data-index-color]');

colorControls.incrementColorButton.addEventListener('click', () => {
  incrementColorIndex();
  updateColor(colors[indexColor.value]);
})

colorControls.decrementColorButton.addEventListener('click', () => {
  decrementColorIndex();
  updateColor(colors[indexColor.value]);
})

function incrementColorIndex() {
  indexColor.value = parseInt(indexColor.value) + 1;
  if(parseInt(indexColor.value) >= colors.length) {
    indexColor.value = 0;
  }
}

function decrementColorIndex() {
  indexColor.value = parseInt(indexColor.value) - 1;
  if(parseInt(indexColor.value) < 0) {
    indexColor.value = (colors.length -1);
  }
}

function updateColor(color) {
  currentColor.value = color;
  robotron.src = images[color];
}

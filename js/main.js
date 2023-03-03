const controls = { 
  incrementButtons: document.querySelectorAll('[data-control="+"]'),
  decrementButtons: document.querySelectorAll('[data-control="-"]'),
}
const statistics = document.querySelectorAll('[data-statistic]');
const parts = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}
const assembler = document.querySelector('.montador');

addEventOnControlButtons();
addEventOnAssembler();

function incrementData(control) {
  const part = control.querySelector('[data-counter]');
  part.value = parseInt(part.value) + 1;
}

function decrementData(control) {
  const part = control.querySelector('[data-counter]');
  part.value = parseInt(part.value) - 1;
}


function increaseStats(part) {
  statistics.forEach((element) => {
    element.textContent = parseInt(element.textContent) + parts[part][element.dataset.statistic];
  })
}

function decreaseStats(part) {
  statistics.forEach((element) => {
    element.textContent = parseInt(element.textContent) - parts[part][element.dataset.statistic];
  })
}

function addEventOnControlButtons() {
  controls.incrementButtons.forEach(
    (element) => {
      element.addEventListener('click', (event) => {
        incrementData(event.target.parentNode);
        increaseStats(event.target.dataset.part);
      })
    }
  )
  
  controls.decrementButtons.forEach(
    (element) => {
      element.addEventListener('click', (event) => {
        const partValue = event.target.parentNode.querySelector('[data-counter]').value;
        if(partValue > 0) {
          decrementData(event.target.parentNode);
          decreaseStats(event.target.dataset.part);
        } else {
          alert("Você não pode inserir um valor negativo.");
        }
      })
    }
  )
}

function validateStatsValues() {
  let isValid = true;

  statistics.forEach((element) => {
    if(parseInt(element.textContent) <= 0) {
      isValid = false;
    }
  });

  return isValid;
}

function addEventOnAssembler() {
  assembler.addEventListener('submit', (event) => {
    event.preventDefault();

    if(validateStatsValues() === false) {
      alert("Um Robotron com status negativos ou zerados não conseguirá batalhar.");
      return;
    }

    window.location.pathname = '/battle-result.html';
  })
}

const robotron = document.querySelector('#robotron');
const controls = { 
  incrementButtons: document.querySelectorAll('[data-control="+"]'),
  decrementButtons: document.querySelectorAll('[data-control="-"]')
}
const statistics = document.querySelectorAll('[data-statistic]');
const parts = {
  "cor": {
    "forca": 0,
      "poder": 0,
      "energia": 0,
      "velocidade": 0
  },
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

robotron.addEventListener('click', () => {
  alert("Robotron: Don't click me human!");
});

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

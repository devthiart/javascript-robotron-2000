const robotron = document.querySelector('#robotron');
const controls = document.querySelectorAll('[data-control]');
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

robotron.addEventListener('click', () => {
  alert("Don't click me human!");
});

function manipulateData(operation, control) {
  const part = control.querySelector('[data-counter]');

  if(operation === '-') {
    part.value = parseInt(part.value) - 1;
  } else {
    part.value = parseInt(part.value) + 1;
  }
}

controls.forEach(
  (element) => {
    element.addEventListener('click', (event) => {
      manipulateData(event.target.dataset.control, event.target.parentNode);
      updateStatistics(event.target.dataset.control, event.target.dataset.part);
    })
  }
)

function updateStatistics(operation, part) {
  if (operation === "+") {
    statistics.forEach((element) => {
      element.textContent = parseInt(element.textContent) + parts[part][element.dataset.statistic];
    })
  } else {
    statistics.forEach((element) => {
      element.textContent = parseInt(element.textContent) - parts[part][element.dataset.statistic];
    })
  }
}

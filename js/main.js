const robotron = document.querySelector('#robotron');
const controls = document.querySelectorAll('[data-control]');

robotron.addEventListener('click', () => {
  console.log("Don't click me human!");
});

function sayHi(name="human") {
  console.log(`Hi ${name}!`);
  console.log("Welcome to Robotron 2000!");
}

sayHi();

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
    })
  }
)

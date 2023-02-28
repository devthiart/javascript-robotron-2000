const robotron = document.querySelector('#robotron');
const sum = document.querySelector('#sum');
const subtract = document.querySelector('#subtract');
const arm = document.querySelector('#arm');
const controls = document.querySelectorAll('.controle-ajuste');

robotron.addEventListener('click', () => {
  console.log("Don't click me human!");
});

function sayHi(name="human") {
  console.log(`Hi ${name}!`);
  console.log("Welcome to Robotron 2000!");
}

sayHi();

function manipulateData(operation) {
  if(operation === '-') {
    arm.value = parseInt(arm.value) - 1;
  } else {
    arm.value = parseInt(arm.value) + 1;
  }
}

controls.forEach(
  (element) => {
    element.addEventListener('click', (event) => {
      manipulateData(event.target.textContent);
    })
  }
)

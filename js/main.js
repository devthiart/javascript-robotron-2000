const robotron = document.querySelector('#robotron');

robotron.addEventListener('click', () => {
  console.log("Don't click me human!");
});

function sayHi(name="human") {
  console.log(`Hi ${name}!`);
  console.log("Welcome to Robotron 2000!");
}

sayHi();

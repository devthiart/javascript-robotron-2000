// My solution

const inkList = document.querySelector('[data-ink-list]');
const buttonHiddenInkList = document.querySelector('[data-button-ink-list]')

function mostraTintas() {
  inkList.setAttribute('data-ink-list', 'mostrar');
  buttonHiddenInkList.removeAttribute('hidden');
}

function esconderTintas() {
  inkList.setAttribute('data-ink-list', 'esconder');
  buttonHiddenInkList.setAttribute('hidden', true);
}

// Teacher solution

// const lista = document.querySelector("ul");
// document.querySelector("#botao").addEventListener("click", () => {
//   lista.setAttribute("data-ink-list", "mostrar");
// });

// document.querySelector(".close").addEventListener("click", () => {
//   lista.setAttribute("data-ink-list", "esconder");
// });

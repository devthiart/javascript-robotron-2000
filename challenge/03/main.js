var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

console.log("Lista with Vermelho: ", lista);

// lista = lista.filter( 
//   (element) => { 
//     if(element !== "Vermelho") {
//       return element;
//     }
//   } 
// );

lista.splice(1, 1);


console.log("Lista without Vermelho: ", lista);

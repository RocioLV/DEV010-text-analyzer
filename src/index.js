// index.js
import analyzer from './analyzer.js';

const textarea = document.getElementsByName('user-input')[0];
textarea.focus();

// Actualizar los valores iniciales en el HTML
// document.querySelector('.metrics[data-testid="word-count"]').textContent = "Palabras: 0";
// document.querySelector('.metrics[data-testid="character-count"]').textContent = "Caracteres: 0";
// document.querySelector('.metrics[data-testid="character-no-spaces-count"]').textContent = "Caracteres sin espacios: 0";
// document.querySelector('.metrics[data-testid="number-count"]').textContent = "Numeros: 0";
// document.querySelector('.metrics[data-testid="number-sum"]').textContent = "Suma total: 0";
// document.querySelector('.metrics[data-testid="word-length-average"]').textContent = "Longitud media de palabras: 0";

document.querySelector('.metrics[data-testid="word-count"]').textContent = "0";  

function start() {

  const text = textarea.value;
  const wordCount = analyzer.getWordCount(text);
  const charCount = analyzer.getCharacterCount(text);
  const charNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  const wordLength = analyzer.getAverageWordLength(text);
  const numCount = analyzer.getNumberCount(text);
  const numSum = analyzer.getNumberSum(text);

  // Actualizar los elementos HTML con los resultados
  document.querySelector('.metrics[data-testid="word-count"]').textContent = "Recuento de palabras: " + wordCount;
  document.querySelector('.metrics[data-testid="character-count"]').textContent = "Recuento de caracteres: " + charCount.toString();
  document.querySelector('.metrics[data-testid="character-no-spaces-count"]').textContent = "Caracteres sin espacios: " + charNoSpaces.toString();
  document.querySelector('.metrics[data-testid="word-length-average"]').textContent = "Longitud media de palabras: " + wordLength.toString();

  if (numCount !== null) {
    document.querySelector('.metrics[data-testid="number-count"]').textContent = "Recuento de números: " + numCount;
    document.querySelector('.metrics[data-testid="number-sum"]').textContent = "Suma total de números: " + numSum;
  }
}

// Llamar a la función start para actualizar los valores iniciales en el HTML
start();

// Agregar el evento keyup para actualizar los resultados cuando la usuaria escriba en el textarea
textarea.addEventListener('keyup', () => {
  start(); // llamar start() aquí dentro del manejador
})


// // Agregar el evento click para limpiar el texto del textarea
// document.getElementByName('reset-button').addEventListener('click', function() {
//   textarea.value = '';
//   start(); // Actualizar las métricas después de limpiar el texto
// });

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
  textarea.value = '';
})

// Botón para limpiar textarea
// const button = document.getElementById('reset-button');
// textarea():

// button.addEventListener('click', function() {
//   textarea.value = '';
// });


// //
// const textarea = document.getElementsByName("user-input")[0];

// textarea.addEventListener('keyup', () =>{
//   const wordCount = analyzer.getWordCount(text);
//   const charCount = analyzer.getCharacterCount(text);
//   const charNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
//   const wordLength = analyzer.getAverageWordLength(text);
//   const numCount = analyzer.getNumberCount(text);
//   const numSum = analyzer.getNumberSum(text);
// },

// document.querySelector('[data-testid="word-count"]').textContent = "Palabras: " + wordCount;
// document.querySelector('[data-testid="character-count"]').textContent = "Caracteres: " + charCount.toString();
// document.querySelector('[data-testid="character-no-spaces-count"]').textContent = "Caracteres sin espacios: " + charNoSpaces.toString();
// document.querySelector('[data-testid="word-length-average"]').textContent = "Longitud media de palabras: " + wordLength.toString();

//   if(numCount !== null){
//     document.querySelector('[data-testid="number-count"]').textContent = "Recuento de números: " + numCount;
//     document.querySelector('[data-testid="number-sum"]').textContent = "Suma total de números: " + numSum;
//   };
  
//PRUEBAS PRUEBAS PRUEBAS

// function start() {
//   const wordCount = analyzer.getWordCount(textarea.value);
//   console.log("Word count:", wordCount);
// }

// textarea.addEventListener('keyup', start)


// const button = document.getElementById('reset-button');
// const textarea = document.querySelector('textarea[name="user-input"]');

// button.addEventListener('click', function() {
//   textarea.value = '';
// });

// const textarea = document.getElementsByName("user-input")[0];

// METRICAS
// document.querySelector('[data-testid="word-count]').textContent = "Palabras: 0";

// function start (){
//   analyzer.getWordCount(textarea.value);
//   // console.log(analyzer.getWordCount(textarea.value)) //invocación de la función
// }





// guardar el valor de analyzer.getWordCount(textarea.value) en una variables
// selector del dom llama al LI word-count
// innerText o innerHTML + la variable que guarde el valor de analyzer.getWordCount(textarea.value))

// console.log(analyzer.getWordCount(textarea.value))








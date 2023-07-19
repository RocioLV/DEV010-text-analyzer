import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

document.querySelector('[data-testid="word-count"]').textContent = "Palabras: 0";
document.querySelector('[data-testid="character-count"]').textContent = "Caracteres: 0";
document.querySelector('[data-testid="character-no-spaces-count"]').textContent = "Caracteres sin espacios: 0";
document.querySelector('[data-testid="number-count"]').textContent = "Numeros: 0";
document.querySelector('[data-testid="number-sum"]').textContent = "Suma total: 0";
document.querySelector('[data-testid="word-length-average"]').textContent = "Longitud media de palabras: 0";


//
const textarea = document.getElementsByName("user-input")[0];
// text.addEventListener("keyup", () => {
textarea.addEventListener('keyup', start) =>{
  const wordCount = analyzer.getWordCount(text);
  const charCount = analyzer.getCharacterCount(text);
  const charNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  const wordLength = analyzer.getAverageWordLength(text);
  const numCount = analyzer.getNumberCount(text);
  const numSum = analyzer.getNumberSum(text);
},

document.querySelector('[data-testing="word-count"]').textContent = "Palabras: " + wordCount;
document.querySelector('[data-testing="character-count"]').textContent = "Caracteres: " + charCount.toString();
document.querySelector('[data-testing="character-no-spaces-count"]').textContent = "Caracteres sin espacios: " + charNoSpaces.toString();
document.querySelector('[data-testing="word-length-average"]').textContent = "Longitud media de palabras: " + wordLength.toString();

  if(numCount !== null){
    document.querySelector('[data-testing="number-count"]').textContent = "Recuento de números: " + numCount;
    document.querySelector('[data-testing="number-sum"]').textContent = "Suma total de números: " + numSum;
  };


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








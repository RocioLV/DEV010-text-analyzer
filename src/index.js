import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

const button = document.getElementById('reset-button');
const textarea = document.querySelector('textarea[name="user-input"]');

button.addEventListener('click', function() {
  textarea.value = '';
});

// METRICAS
function start  (){
  //  console.log(textarea.value);
  // objetos y funciones en JS
  //analyzer.getWordCount // llamar a la funcion
  analyzer.getWordCount(textarea.value) // invocacion. deuna funcion
  //console.log(analyzer.getWordCount(textarea.value));
  // guardar el valor de analyzer.getWordCount(textarea.value) en una variables
  // selector del dom llama al LI word-count
  // innerText o innerHTML + la variable que guarde el valor de analyzer.getWordCount(textarea.value))

}
textarea.addEventListener('keyup', start );









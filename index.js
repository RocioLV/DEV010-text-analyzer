// index.js
import analyzer from './analyzer.js';

const textarea = document.querySelector('[name="user-input"]');
const wordCountElement = document.querySelector('.metrics[data-testid="word-count"]');
const charCountElement = document.querySelector('.metrics[data-testid="character-count"]');
const charNoSpacesElement = document.querySelector('.metrics[data-testid="character-no-spaces-count"]');
const wordLengthElement = document.querySelector('.metrics[data-testid="word-length-average"]');
const numCountElement = document.querySelector('.metrics[data-testid="number-count"]');
const numSumElement = document.querySelector('.metrics[data-testid="number-sum"]');

textarea.focus();
wordCountElement.textContent = "0";

function updateMetrics() {
  const text = textarea.value.trim();
  const wordCount = analyzer.getWordCount(text);
  const charCount = analyzer.getCharacterCount(text);
  const charNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  const wordLength = analyzer.getAverageWordLength(text);
  const numCount = analyzer.getNumberCount(text);
  const numSum = analyzer.getNumberSum(text);

  wordCountElement.textContent = `Recuento de palabras: ${wordCount}`;
  charCountElement.textContent = `Recuento de caracteres: ${charCount}`;
  charNoSpacesElement.textContent = `Caracteres sin espacios: ${charNoSpaces}`;
  wordLengthElement.textContent = `Longitud media de palabras: ${wordLength}`;

  if (numCount !== null) {
    numCountElement.textContent = `Recuento de números: ${numCount}`;
    numSumElement.textContent = `Suma total de números: ${numSum}`;
  }
}

updateMetrics();

textarea.addEventListener('keyup', updateMetrics);

document.getElementById('reset-button').addEventListener('click', () => {
  textarea.value = "";
  updateMetrics();
});

const analyzer = {  

  getWordCount: (text) => {
    // const sinEspacios = text.trim();
    // const convertirEnArray = sinEspacios.split(" ");
    // const contador = convertirEnArray.length;
    // // console.log(contador)
    // return contador
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
    const word = text.trim().split(" ");
    const contador = word.length;
    return contador;
  },
  
  getCharacterCount: (text) => { // parametro
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const character = text;
    return character.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const noSpaces = text.replace(/ /g, "");
    const noPunctuation = noSpaces.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
    // const characterCount = noPunctuation.length;
    return noPunctuation.length;
    // console.log(characterCount);

    //o intentar con esta:
    // let words = text.split(" ");  
    // let count = 0;  
    // for (let i = 0; i < words.length; i++) {
    //   count += words[i].length;  
    // }  
    // return count;
  },

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    let totalLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      totalLength += words[i].length;  
    }
    // return totalLength / words.length;  
    const averageLength = totalLength / words.length;

    return averageLength.toFixed(1);
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;

    for (let i = 0; i < text.length; i++) {
      if (!isNaN(parseInt(text[i]))) {
        count++;
      }  
    }
    return count;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let sum = 0;

    for (let i = 0; i < text.length; i++) {   
      if (!isNaN(parseInt(text[i]))) {
        sum += parseInt(text[i]); 
        i += String(parseInt(text[i])).length - 1;
      }  
    }
    return sum;
  },
}

export default analyzer;

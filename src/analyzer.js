const analyzer = {  

  getWordCount: (text) => {
    const word = text.trim();
    if (word === "") {
      return 0;
    }
    const words = word.split(/\s+/); // Use regex to split by one or more spaces
    return words.length;
    // const sinEspacios = text.trim();
    // const convertirEnArray = sinEspacios.split(" ");
    // const contador = convertirEnArray.length;
    // // console.log(contador)
    // return contador
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // const word = text.trim().split(" ");
    // const contador = word.length;
    // return contador;
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
    const words = text.split(/\s+/).filter(word => word !== '');
    let totalLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      totalLength += words[i].length;  
    }
    // return totalLength / words.length;  
    const averageLength = totalLength / words.length;

    // return averageLength;
    return parseFloat(averageLength.toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    
    const regex = /(?<!\w)[-+]?\d+(\.\d+)?(?!\w)/g; // Expresión regular para encontrar números enteros y decimales
    const numbers = text.match(regex); // Utilizamos el método match() para encontrar todos los números

    if (numbers === null) {
      return 0; // Si no se encuentran números, retornamos 0
    } 

    let count = 0;

    for (const number of numbers) {
      if (!isNaN(parseFloat(number))) {
        count++;
      }
    }

    return count;
  },

  getNumberSum: (text) => {
    const regex = /(?<!\w)[-+]?\d+(\.\d+)?(?!\w)/g; // Expresión regular para encontrar números enteros y decimales
    const numbers = text.match(regex); // Utilizamos el método match() para encontrar todos los números
  
    if (numbers === null) {
      return 0; // Si no se encuentran números, retornamos 0
    } 
  
    let sum = 0;
  
    for (const number of numbers) {
      sum += parseFloat(number); // Utilizamos parseFloat para convertir la cadena a número con decimales
    }
  
    return sum;
  },
  
}

export default analyzer;

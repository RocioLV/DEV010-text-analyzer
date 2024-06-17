// analizer.js

const analyzer = {  
  getWordCount: (text) => text.trim() ? text.trim().split(/\s+/).length : 0,

  getCharacterCount: (text) => text.length,

  getCharacterCountExcludingSpaces: (text) => text.replace(/\s|[.,/#!$%^&*;:{}=\-_`~()]/g, '').length,

  getAverageWordLength: (text) => {
    const words = text.split(/\s+/).filter(Boolean);
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    return words.length ? parseFloat((totalLength / words.length).toFixed(2)) : 0;
  },

  getNumberCount: (text) => {
    const numbers = text.match(/(?<!\w)[-+]?\d+(\.\d+)?(?!\w)/g);
    return numbers ? numbers.length : 0;
  },

  getNumberSum: (text) => {
    const numbers = text.match(/(?<!\w)[-+]?\d+(\.\d+)?(?!\w)/g);
    return numbers ? numbers.reduce((acc, num) => acc + parseFloat(num), 0) : 0;
  }
};

export default analyzer;

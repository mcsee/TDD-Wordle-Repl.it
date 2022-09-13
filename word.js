class Word {
  constructor(word) {
    if (word.length < 5)
      throw new Error('Too few letters. Should be 5');
    if (word.length > 5)
      throw new Error('Too many letters. Should be 5');
    if (!word.match(/^[a-z]+$/)) 
      throw new Error('word has invalid letters');
    this._word = word;
  } 
  letters() {
      return this._word.split("");
  }  
  word() {
      return this._word;
  }  
  sameAs(word) {
    return word.word() == this.word();
  }
}

module.exports = Word; 
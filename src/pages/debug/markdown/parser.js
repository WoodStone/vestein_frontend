
class Parser {

  constructor(tokens) {
    this.tokens = tokens;
    this.index = 0;
    this.stack = [];
    this.currentToken = null;
  }

  match(expected) {
    if (this.currentToken === expected) {
      this.stack.push(this.currentToken);
      return true;
    }
    return false;
  }

  error() {

  }

  generate() {
    return {
      index: this.index,
      stack: this.stack,
      currentToken: this.currentToken,
      tokens: this.tokens
    }
  }

  start() {

    while (true) {

    }

  }

}

export default Parser

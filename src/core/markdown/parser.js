import Token from './token'

/**
 * @author Vestein Dahl
 */
class Parser {

  /** @type {number} */
  index = 0;
  /** @type {Token[]} */
  stack = [];
  /** @type {Token} */
  currentToken = null;

  halt() {
    this.index = 0;
    this.stack = [];
    this.currentToken = null;
  }

  /**
   * @param {string} expected
   * @returns {boolean}
   */
  match(expected) {
    if (this.currentToken.token === expected) {
      this.stack.push(this.currentToken);
      return true;
    }
    return false;
  }

  /**
   *
   */
  error() {

  }

  /**
   * @param {Token[]} tokens
   * @returns {{index: number, stack: Token[], currentToken: Token, tokens: Token[]}}
   */
  generate(tokens) {
    return {
      index: this.index,
      stack: this.stack,
      currentToken: this.currentToken,
      tokens: tokens
    }
  }

  /**
   *
   */
  start() {

    while (true) {
      this.currentToken = this.tokens[this.index];

    }

  }

}

export default Parser

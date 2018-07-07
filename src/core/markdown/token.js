
class Token {

  /**
   * @param {string} token
   * @param {*} value
   * @param {number} start
   * @param {number} end
   */
  constructor(token, value, start, end) {
    this.token = token;
    this.value = value;
    this.start = start;
    this.end = end;
  }

}

export default Token;
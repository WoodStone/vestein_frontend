/**
 * @global
 * @class Token
 * @param {string} token
 * @param {*} value
 * @param {number} start
 * @param {number} end
 */
export default function Token(token, value, start, end) {
  return {
    token: token,
    value: value,
    start: start,
    end: end
  }
}

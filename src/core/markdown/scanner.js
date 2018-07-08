import Token from './token';

/**
 * @author Vestein Dahl
 */
class Scanner {

  /**
   * @param {string} input
   * @returns {Token[]}
   */
  static generateTokens(input) {
    let ts = [];
    let index = 0;

    while (true) {
      let next = Scanner.nextToken2(input, index);
      if (next == null) {
        break;
      }
      ts.push(next);
      index = next.end;
    }

    return ts;
  }

  /**
   * @param {string} input
   * @param {number} i
   * @returns {Token}
   */
  static nextToken(input, i) {
    let pos = i;
    let state = 0;

    while (true) {
      const c = input[pos++];
      switch (state) {
        case 0:
          switch (c) {
            case "#":
              state = 1;
              break;
            case "\n":
              return new Token("NEWLINE", null, i, pos);
            case "(":
              state = 4;
              break;
            case ")":
              state = 5;
              break;
            case "[":
              state = 6;
              break;
            case "]":
              state = 7;
              break;
            case "*":
              state = 8;
              break;
            case "_":
              state = 9;
              break;
            case "=":
              state = 10;
              break;
            case "~":
              state = 11;
              break;
            case "!":
              state = 13;
              break;
            case ":":
              state = 14;
              break;
            case "`":
              state = 15;
              break;
            case ">":
              state = 18;
              break;
            case undefined:
              return null;
            default:
              state = 3;
              break;
          }
          break;
        case 1:
          switch (c) {
            case "#":
              state = 1;
              break;
            case " ":
              state = 2;
              break;
            case "\t":
              state = 2;
              break;
            default:
              return new Token("S", input.substring(i, --pos), i, pos);
              // break;
          }
          break;
        case 2:
          switch (c) {
            case " ":
              state = 2;
              break;
            case "\t":
              state = 2;
              break;
            default:
              return new Token("HS", input.substring(i, --pos), i, pos);
          }
          break;
        case 3:
          switch (c) {
            case "(":
            case ")":
            case "[":
            case "]":
            case "*":
            case "_":
            case "~":
            case "`":
            case "\n":
            case undefined:
              return new Token("S", input.substring(i, --pos), i, pos);
            default:
              break;
          }
          break;
        case 4:
          return new Token("LC", 1, i, --pos);
        case 5:
          return new Token("RC", 1, i, --pos);
        case 6:
          return new Token("LB", 1, i, --pos);
        case 7:
          return new Token("RB", 1, i, --pos);
        case 8:
          switch (c) {
            case "*":
              break;
            default:
              return new Token("ASTERISK", --pos - i, i, pos)
          }
          break;
        case 9:
          switch (c) {
            case "_":
              break;
            default:
              return new Token("UNDERSCORE", --pos - i, i, pos)
          }
          break;
        case 10:
          return new Token("EQUAL", 1, i, --pos);
        case 11:
          switch (c) {
            case "~":
              state = 12;
              break;
            default:
              state = 3;
              break;
          }
          break;
        case 12:
          return new Token("STRIKE", 2, i, --pos);
        case 13:
          return new Token("MARK", 1, i, --pos);
        case 14:
          return new Token("COLON", 1, i, --pos);
        case 15:
          switch (c) {
            case "`":
              state = 16;
              break;
            default:
              return new Token("TICK", 1, i, --pos);
          }
          break;
        case 16:
          switch (c) {
            case "`":
              state = 17;
              break;
            default:
              state = 3;
              break;
          }
          break;
        case 17:
          return new Token("TICKS", 3, i, --pos);
        case 18:
          return new Token("SIGN", 1, i, --pos);
        case -1:
        default:
          return null
      }
    }
  }

  static nextToken2(input, i) {
    let pos = i;
    let state = 0;

    while (true) {
      const c = input[pos++];
      switch (state) {
        case 0:
          switch (c) {
            case "#":
              state = 1;
              break;
            case "\n":
              return new Token("LINEBREAK", null, i, pos);
            case "(":
              return new Token("LEFT_PARENTHESIS", "(", i, pos);
            case ")":
              return new Token("RIGHT_PARENTHESIS", ")", i, pos);
            case "[":
              return new Token("LEFT_BRACKET", "[", i, pos);
            case "]":
              return new Token("RIGHT_BRACKET", "]", i, pos);
            case "=":
              return new Token("EQUAL", "=", i, pos);
            case "!":
              return new Token("MARK", "!", i, pos);
            case ":":
              return new Token("COLON", ":", i, pos);
            case "*":
              state = 4;
              break;
            case "_":
              state = 5;
              break;
            case "~":
              state = 6;
              break;
            case "`":
              state = 8;
              break;
            case ">":
              state = 11;
              break;
            case undefined:
              return null;
            default:
              state = -2;
              break;
          }
          break;
        case 1:
          switch (c) {
            case "#":
              break;
            case " ":
            case "\t":
              state = 2;
              break;
            default:
              state = -1;
              break;
          }
          break;
        case 2:
          switch (c) {
            case " ":
            case "\t":
              break;
            default:
              return new Token("HEADER", input.substring(i, --pos), i, pos);
          }
          break;
        case 4:
          switch (c) {
            case "*":
              break;
            default:
              return new Token("ASTERISK", --pos - i, i, pos);
          }
          break;
        case 5:
          switch (c) {
            case "_":
              break;
            default:
              return new Token("UNDERSCORE", --pos - i, i, pos);
          }
          break;
        case 6:
          switch (c) {
            case "~":
              state = 7;
              break;
            default:
              state = -1;
          }
          break;
        case 7:
          return new Token("STRIKE", "~~", i, --pos);
        case 8:
          switch (c) {
            case "`":
              state = 9;
              break;
            default:
              return new Token("TICK", "`", i, --pos);
          }
          break;
        case 9:
          switch (c) {
            case "`":
              state = 10;
              break;
            default:
              state = -1;
          }
          break;
        case 10:
          return new Token("TICKS", "```", i, --pos);
        case 11:
          switch (c) {
            case "<":
              return new Token("SIGN", "<", i, --pos);
            default:
              state = -1;
          }
          break;
        case -1:
          return new Token("S", input.substring(i, --pos), i, pos);
        case -2:
          if (specChars[c] || c === undefined) {
            return new Token("S", input.substring(i, --pos), i, pos);
          }
          break;
        default:
          return null;
      }
    }
  }

}

const specChars = {
  "\n": true,
  "(": true,
  ")": true,
  "[": true,
  "]": true,
  "*": true,
  "_": true,
  "=": true,
  "~": true,
  "!": true,
  ":": true,
  "`": true,
  ">": true
};

export default Scanner;

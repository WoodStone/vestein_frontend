
const newToken = (token, value, start, end) => {
  return {
    token: token,
    value: value,
    start: start,
    end: end
  }
};

export const tokens = (input) => {
  let ts = [];
  let index = 0;

  while (true) {
    let next = nextToken(input, index);
    if (next == null) {
      break;
    }
    ts.push(next);
    index = next.end;
  }
  return ts;
};

export const nextToken = (input, i) => {
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
            return newToken("NEWLINE", null, i, pos);
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
            state = 3;
            break;
        }
        break;
      case 2:
        switch (c) {
          case " ":
            state = 2;
            break;
          case "\t":
            state = 2; break;
          default:
            return newToken("HS", input.substring(i, --pos), i, pos);
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
            return newToken("S", input.substring(i, --pos), i, pos);
          default:
            break;
        }
        break;
      case 4:
        return newToken("LC", 1, i, --pos);
      case 5:
        return newToken("RC", 1, i, --pos);
      case 6:
        return newToken("LB", 1, i, --pos);
      case 7:
        return newToken("RB", 1, i, --pos);
      case 8:
        switch (c) {
          case "*":
            break;
          default:
            return newToken("ASTERISK", --pos - i, i, pos)
        }
        break;
      case 9:
        switch (c) {
          case "_":
            break;
          default:
            return newToken("UNDERSCORE", --pos - i, i, pos)
        }
        break;
      case 10:
        return newToken("EQUAL", 1, i, --pos);
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
        return newToken("STRIKE", 2, i, --pos);
      case 13:
        return newToken("MARK", 1, i, --pos);
      case 14:
        return newToken("COLON", 1, i, --pos);
      case 15:
        switch (c) {
          case "`":
            state = 16;
            break;
          default:
            return newToken("TICK", 1, i, --pos);
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
        return newToken("TICKS", 3, i, --pos);
      case 18:
        return newToken("SIGN", 1, i, --pos);
      case -1:
      default:
        return null
    }
  }

};


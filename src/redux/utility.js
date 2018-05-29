export const SENT = (type) => { return {type: type.SENT}};
export const RECEIVED = (type, response) => { return {type: type.RECEIVED, response: response}};
export const ERROR = (type, error) => { return {type: type.ERROR, error: error}};

export const type = (type) => {
  return {
    SENT: type + "_SENT",
    RECEIVED: type + "_RECEIVED",
    ERROR: type + "_ERROR"
  }
};
import { NotImplementedError } from '../extensions/index.js';
export default class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    if (arguments.length != 2 || message===undefined || key===undefined )
    throw new Error("Incorrect arguments!")
    message = message.toUpperCase();
    let keycode = key.toUpperCase();
    const messageLength = message.length;
    keycode = keycode.repeat(Math.ceil(messageLength / key.length)).split('');
    let code = "";
    for (let i = 0; i < messageLength; i += 1) {
      if (65 <= message.charCodeAt(i) && message.charCodeAt(i) < 91) {
        code += String.fromCharCode(((message.charCodeAt(i) + keycode[0].charCodeAt(0)) % 26) + 65);
        keycode.shift();
      } else {
        code += message.charAt(i);
      }
    }
    if (this.type === false) {
      return code.split('').reverse().join('');
    }
    return code;
  }
  decrypt(message, key) {
    if (arguments.length != 2 || message===undefined || key===undefined )
    throw new Error("Incorrect arguments!")
    message = message.toUpperCase();
    let keycode = key.toUpperCase();
    const messageLength = message.length;
    keycode = keycode.repeat(Math.ceil(messageLength / key.length)).split('');
    let code = "";
    for (let i = 0; i < messageLength; i += 1) {
      if (65 <= message.charCodeAt(i) && message.charCodeAt(i) < 91) {
        code += String.fromCharCode(((message.charCodeAt(i) + 26 - keycode[0].charCodeAt(0)) % 26) + 65);
        keycode.shift();
      } else {
        code += message.charAt(i);
      }
    }
    if (this.type === false) {
      return code.split('').reverse().join('');
    }
    return code;
  }
}
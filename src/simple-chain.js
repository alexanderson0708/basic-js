import { NotImplementedError } from '../extensions/index.js';

export default  {
  "link": [],

  getLength() {
    const chainLength = chainMaker.link.filter(function(x) {
      return x !== undefined;
    });
    return chainLength.length;
  },
  addLink(value) {
    chainMaker.link.push(value);
    return chainMaker;
  },
  removeLink(position) {
    const clearChain = chainMaker.link.filter(function(x) {
      return x !== undefined;
    });
    chainMaker.link = clearChain;

    if(!Number.isInteger(position) ||
      position <= 0 ||
      position > chainMaker.link.length) {
        chainMaker.link = [];
        throw new Error("You can't remove incorrect link!");
    }
    chainMaker.link[position - 1] = undefined;
    return chainMaker;
  },
  reverseChain() {
    chainMaker.link = chainMaker.link.reverse();
    return chainMaker;
  },
  finishChain() {
    const clearChain = chainMaker.link.filter(function(x) {
      return x !== undefined;
    });

    let result = "";
    clearChain.forEach(function (element) {
      result += "( " + element + " )~~";
    });
    chainMaker.link = [];
    return result.slice(0,-2);
  }
};


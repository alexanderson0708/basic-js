import { NotImplementedError } from '../extensions/index.js';
export default class DepthCalculator {
  calculateDepth(arr) {
  if (Array.isArray(arr)){
   return arr.length===0 ? 1:1+Math.max(...arr.map(x=>this.calculateDepth(x)))}
    return 0
  }
};
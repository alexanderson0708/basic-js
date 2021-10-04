import { NotImplementedError } from '../extensions/index.js';


export default function getSumOfDigits( n ) {
  if (n>=0 && n<=9)
  return n 
  let sum = 0;
  let N = String(n);
  for (let i=0; i<N.length; i++){
    sum += Number(N[i])
  }
  return getSumOfDigits(sum);
  
  // remove line with error and write your code here
}

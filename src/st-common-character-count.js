import { NotImplementedError } from '../extensions/index.js';

 export default function getCommonCharacterCount(a,b){
  let x = a.split('')
  let count = 0
  for (let i=0; i<=b.length; i++){
      if (b.include(x[i])){
          count++
      }
  }
  return x
}
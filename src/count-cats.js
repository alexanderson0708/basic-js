import { NotImplementedError } from '../extensions/index.js';


export default function countCats(matrix) {
   let arr=[]
   for (let i=0;i<matrix.length;i++){
     let cats=matrix[i].filter(x=>x==="^^")
     arr=arr.concat(cats)
   }
   return arr.length
 };
 
 

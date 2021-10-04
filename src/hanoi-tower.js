import { NotImplementedError } from '../extensions/index.js';

export default function calculateHanoi(disksNumber, turnsSpeed) {
 let aObj={
   turns:0,
   seconds:0,
 }
 let turn=Math.pow(2,disksNumber)-1
 let sec=Math.floor(turn/turnsSpeed*3600)
 aObj.turns=Number(turn)
 aObj.seconds=Number(sec)
 return aObj
};

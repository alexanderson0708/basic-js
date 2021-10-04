import { NotImplementedError } from '../extensions/index.js';

export default function createDreamTeam(members) {
  if (Array.isArray(members)===false){return false}
  let a=[]
  members.forEach(element => { 
    if (typeof element==="string"){
     let b = element.trim().charAt(0).toUpperCase()
     a.push(b)
    }
  });
  return a.sort().join('')
};


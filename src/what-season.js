import { NotImplementedError } from '../extensions/index.js';

export default function getSeason(date) {
    try{
        date.toTimeString();
    }catch (e){
        throw new Error ("Invalid date!")
    }

    if (!date || !(Object.prototype.toString.call(date)==="[object Date]") || isNaN(date) || date===0 || date==='' )
    throw "Invalid date!"
 
 if (date===undefined){return 'Unable to determine the time of year!'} 
 let month=Date.prototype.getMonth.call(date)
 if (month===11||month===0||month===1){return 'winter'}
 else if(month>=2&&month<=4){return 'spring'}
 else if(month>=5&&month<=7){return 'summer'}
 else if(month>=8&&month<=10){return 'autumn'}
};

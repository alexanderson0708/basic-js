import { NotImplementedError } from '../extensions/index.js';


export default function renameFiles(names) {
return /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(names);
}

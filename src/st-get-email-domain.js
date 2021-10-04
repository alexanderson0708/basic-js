import { NotImplementedError } from '../extensions/index.js';


export default function getEmailDomain(email) {
  let a = email.lastIndexOf("@")+1;
  return email.substring(a);
}

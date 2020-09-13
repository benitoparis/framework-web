import {User} from './user'

const user = new User('bernard', 23);

console.log(user.get('name'));
console.log(user.get('age'));
//Convert types
let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

let c = 'someString';
let d: number = parseInt(c);

interface User {
    name: string;
    email: string;
    login: string;
}

//: User | as User | <User> - not valid in React.js!!!!
const user = {
    name: 'Sam',
    email: 'gogi@mail.fi',
    login: 'sam14'
} as User

interface Admin {
    name: string;
    role: number;
}

/*
//Don't recommended!!!
const admin: Admin = {
    ...user,
    role: 1
}
 */

const userToAdmin = (user: User): Admin => {
    return {
        name: user.name,
        role: 1
    }
}
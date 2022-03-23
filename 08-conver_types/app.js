"use strict";
//Convert types
let a = 5;
let b = a.toString();
let e = new String(a).valueOf();
let f = new Boolean(a).valueOf();
let c = 'someString';
let d = parseInt(c);
//: User | as User | <User> - not valid in React.js!!!!
const user = {
    name: 'Sam',
    email: 'gogi@mail.fi',
    login: 'sam14'
};
/*
//Don't recommended!!!
const admin: Admin = {
    ...user,
    role: 1
}
 */
const userToAdmin = (user) => {
    return {
        name: user.name,
        role: 1
    };
};

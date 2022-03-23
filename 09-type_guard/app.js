"use strict";
//: User | as User | <User> - not valid in React.js!!!!
const user = {
    name: 'Sam',
    email: 'gogi@mail.fi',
    login: 'sam14'
};
const isString = (x) => {
    return typeof x === 'string';
};
const logId = (id) => {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
};
const isAdmin = (user) => {
    return 'role' in user;
};
const isAdminAlternative = (user) => {
    return user.role !== undefined;
};
const setRoleZero = (user) => {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('User is not Admin');
    }
};

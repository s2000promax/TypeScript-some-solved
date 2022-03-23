"use strict";
//Null
const n = null;
const n1 = null;
const getUser = () => {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'UserName'
        };
    }
};
const user = getUser();
const usrName = user ? user.name : null;

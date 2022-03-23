"use strict";
//Union type
const logId = (id) => {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
    else {
        if (typeof id === 'number') {
            console.log(id.toFixed());
        }
        else {
            console.log(id);
        }
    }
};
logId('word');
logId(22);
logId(true);
const logError = (err) => {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
};
const logObject = (obj) => {
    if ('a' in obj) {
        obj.a = 111;
    }
    else {
        obj.b = 222;
    }
};
const logMultipleIds = (a, b) => {
    if (a === b) {
        console.log(a, b);
    }
    else {
        console.log(a, b);
    }
};
//Literal types
/*
enum RequestType {
    GET = 'get',
    POST = 'post'
}
 */
const fetchWithAuth = (url, method) => {
};
fetchWithAuth('someUrl', 'post');
let a = 'someConst';
// a = 'asdf';
let method = 'post';
fetchWithAuth('someUrl', method);

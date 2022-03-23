"use strict";
//Never
const generateError = (message) => {
    throw new Error(message);
};
const dumpError = () => {
    // return '';
    while (true) {
    }
};
const rec = () => {
    rec();
};
const processAction = (action) => {
    switch (action) {
        case 'refund': //
            break;
        case 'checkout': //
            break;
        case 'reject': //
            break;
        default:
            const _ = action;
            throw new Error('No action');
    }
};
const isString = (x) => {
    if (typeof x === 'string') {
        return true;
    }
    else {
        return false;
    }
    generateError('Some Message'); //Function return NEVER!!!
};

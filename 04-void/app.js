"use strict";
//Void
const logId = (id) => {
    console.log(id);
};
const a = logId(1);
const multiply = (first, second) => {
    if (!second) {
        return first * first;
    }
    // return first * second;
};
const f1 = () => {
};
const f2 = () => {
    return true;
};
const b = f2();
const skills = ['JS', 'PHP'];
const user = {
    s: ['s']
};
skills.forEach((skill) => user.s.push(skill));

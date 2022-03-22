"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Variables
const a = 100;
const b = 50;
const sum = a + b;
//Functions
const getFullName = (entity) => {
    return `${entity.firstname} ${entity.surname}`;
};
//Objects
const info = {
    "officeId": 38,
    "isOpened": false,
    "contacts": {
        "phone": "+12100000000",
        "email": "my@email.eu",
        "address": {
            "city": "Helsinki"
        }
    }
};
//Arrays
const skills = ['javaScript', 'typeScript', '.Net'];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}
const result = skills
    .filter((s) => s !== 'typeScript')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(result);
//Tuples
const skill = [1, 'typeScript'];
const id = skill[0];
const skillName = skill[1];
// const other = skill[2]; !!!
const someArr = [1, 'str', true, false, false];
//Readonly
const skillArr = [1, 'typeScript'];
// skillArr[0] = 2; !!!
const skillArrGen = ['javaScript', 'typeScript'];
// skillArr[0] = 'someSkills'; !!!
//Enums
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 3] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 10] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Paid success',
    statusCode: StatusCode.SUCCESS
};
if (res.statusCode === StatusCode.SUCCESS) {
}
const compute = () => {
    return 3;
};
//with function
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = compute()] = "USER";
})(Roles || (Roles = {}));
//Async function
/* Запрос */
/*
{
    "topicId": 5,
    "status": "published" // "draft", "deleted"
}

 */
/* Ответ */
/*
[
    {
        "question": "Как осуществляется доставка?",
        "answer": "быстро!",
        "tags": [
            "popular",
            "new"
        ],
        "likes": 3,
        "status": "published"
    }
]
*/
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["Published"] = "published";
    QuestionStatus["Draft"] = "draft";
    QuestionStatus["Deleted"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        return data;
    });
}

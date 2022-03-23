//Union type
const logId = (id: string | number | boolean) => {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    } else {
        if (typeof id === 'number') {
            console.log(id.toFixed());
        } else {
            console.log(id);
        }
    }
}

logId('word');
logId(22);
logId(true);

const logError = (err: string | string[]) => {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}

const logObject = (obj: {a: number} | {b: number}) => {
    if ('a' in obj) {
        obj.a = 111;
    } else {
        obj.b = 222;
    }
}

const logMultipleIds = (a: string | number, b: string | boolean) => {
    if (a === b) {
        console.log(a, b);
    } else {
        console.log(a, b);
    }
}

//Literal types
/*
enum RequestType {
    GET = 'get',
    POST = 'post'
}
 */
const fetchWithAuth = (url: string, method: 'get' | 'post') => {
}
fetchWithAuth('someUrl', 'post');

let a: 'someConst' = 'someConst';
// a = 'asdf';

let method = 'post';
fetchWithAuth('someUrl', method as 'post')
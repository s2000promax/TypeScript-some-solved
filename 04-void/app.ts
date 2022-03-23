//Void
const logId = (id: string | number) => {
    console.log(id);
}

const a = logId(1);

const multiply = (first: number, second?: number) => {
    if (!second) {
        return first * first;
    }
   // return first * second;
}

type voidFunc = () => void;

const f1: voidFunc = () => {

}

const f2: voidFunc = () => {
    return true;
}

const b = f2();

const skills = ['JS', 'PHP'];

const user = {
    s: ['s']
}

skills.forEach((skill) => user.s.push(skill));
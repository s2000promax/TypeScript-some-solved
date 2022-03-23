//Interfaces
interface User {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string;
}

interface RootRole {
    root: boolean
}

interface UserWithRole extends User, RootRole {
    roleId: number
}

const user : UserWithRole = {
    name: 'UserName',
    age: 54,
    skills: ['js', 'next'],
    roleId: 11,
    root: false,
    log(id) {
        return 'someLog';
    }
}

interface UserDictionary {
    [index: string]: User
}

type UserDictionary2 = {
    [index: string]: User
}

//Optional
interface UserAuth {
    login: string;
    password?: string;
}

const userAuth: UserAuth = {
    login: 'someLogin',
    //password: ''
}

const multiply = (first: number, second?: number) => {
if (!second) {
    return first * first;
}
    return first * second;
}

interface UserPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    }
}

const testPass = (user: UserPro) => {
const t = user.password?.type;
}

const test = (param?: string) => {
    const t = param ?? multiply(5)
}
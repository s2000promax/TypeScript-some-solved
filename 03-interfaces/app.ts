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
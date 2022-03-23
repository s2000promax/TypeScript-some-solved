//Null
const n: null = null;
const n1: any = null;
/*
const n2: number = null;
const n3: string = null;
const n4: boolean = null;
 */

interface User {
    name: string;
}

const getUser = () => {
    if (Math.random() > 0.5) {
        return null;
    } else {
        return {
            name: 'UserName'
        } as User
    }
}

const user = getUser();
const usrName = user ? user.name : null;
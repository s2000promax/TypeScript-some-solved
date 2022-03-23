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

//Task
enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}
interface IPayment {
    sum: number,
    from: number,
    to: number
}

interface IPaymentRequest extends IPayment { }

interface IResponseDataSuccess extends IPayment{
    databaseId: number;
}

interface IResponseDataFailed {
    errorMessage: string;
    errorCode: number;

}
/*
interface IResponce {
    status: PaymentStatus;
    data: IResponseDataSuccess | IResponseDataFailed;
}

 */

interface IResponceSuccess {
    status: PaymentStatus.Success;
    data: IResponseDataSuccess;
}

interface IResponceFailed {
    status: PaymentStatus.Failed;
    data: IResponseDataFailed;
}

// const get = (): IResponceSuccess | IResponceFailed => { }

// Запрос в виде платежа
/*
{
    "sum": 10000,
    "from": 2,
    "to": 4
}
*/
// Ответ
/*
{
    "status": "success",
    "data": {
    "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
}
},
{
    "status": "failed",
    "data": {
    "errorMessage": "Недостаточно средств",
        "errorCode": 4
}
}
*/
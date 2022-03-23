//Type Guard
interface User {
    name: string;
    email: string;
    login: string;
}

//: User | as User | <User> - not valid in React.js!!!!
const user = {
    name: 'Sam',
    email: 'gogi@mail.fi',
    login: 'sam14'
} as User

interface Admin {
    name: string;
    role: number;
}

const isString = (x: string | number): x is string => {
    return typeof x === 'string'
}

const logId = (id: string | number) => {
    if (isString(id)) {
        console.log(id);
    } else {
        console.log(id)
    }
}


const isAdmin = (user: User | Admin): user is Admin => {
    return 'role' in user;
}

const isAdminAlternative = (user: User | Admin): user is Admin => {
    return (user as Admin).role !== undefined;
}

const setRoleZero = (user: User | Admin) => {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error('User is not Admin');
    }
}

//Task
interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment {
}

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}


type f = (res: IResponseSuccess | IResponseFailed) => number;
type Res = IResponseSuccess | IResponseFailed;

const isSuccess = (res: Res): res is IResponseSuccess => {
    if (res.status === PaymentStatus.Success) {
        return true;
    } else {
        return false;
    }
}

const getIdFromData = (res: Res): number => {
    if (isSuccess(res)) {
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage);
    }
}



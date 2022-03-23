//Never
const generateError = (message: string): never => {
    throw new Error(message)
}

const dumpError = (): never => {
    // return '';
    while (true) {
    }
}

/*
const rec = (): never => {
    rec();
}
 */

type paymentAction = 'refund' | 'checkout' | 'reject';

const processAction = (action: paymentAction) => {
    switch (action) {
        case 'refund': //
            break;
        case 'checkout': //
            break;
        case 'reject': //
            break;
        default:
            const _: never = action;
            throw new Error('No action');
    }
}
/*
const isString = (x: string | number): boolean => {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }
    generateError('Some Message'); //Function return NEVER!!!
}

 */
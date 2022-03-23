//Onknown
let input: unknown;

input= 3;
input = ['first', 'second'];

const run = (i: unknown) => {
    if (typeof i === 'number') {
        i += 1;
    } else {

    }
}

run(input)

//
async function getData() {
    try {
        await fetch('')
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }

    }
}
async function getData() {
    try {
        await fetch('')
    } catch (error) {
        const e = error as Error;
        console.log(e.message)
    }
}

type U1 = unknown | number;

type I1 = unknown & string;
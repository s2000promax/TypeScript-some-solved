//Variables
const a: number = 100;
const b: number = 50;
const sum: number = a + b;

//Functions
const getFullName = (entity : {firstname : string, surname: string}): string => {
    return `${entity.firstname} ${entity.surname}`
}

//Objects
const info : {
    officeId: number;
    isOpened: boolean;
    contacts: {
        phone: string;
        email: string;
        address: {
            city: string;
        }
    }
} = {
    "officeId": 38,
    "isOpened": false,
    "contacts": {
        "phone": "+12100000000",
        "email": "my@email.eu",
        "address": {
            "city": "Helsinki"
        }
    }
}

//Arrays
const skills: string[] = ['javaScript', 'typeScript', '.Net'];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}

const result = skills
    .filter( (s: string) => s !== 'typeScript')
    .map( s => s + '! ')
    .reduce( (a, b) => a + b);

console.log(result);

//Tuples
const skill: [number, string] = [1, 'typeScript'];
const id = skill[0];
const skillName = skill[1];
// const other = skill[2]; !!!

const someArr: [number, string, ...boolean[]] = [1, 'str', true, false, false];

//Readonly
const skillArr: readonly [number, string] = [1, 'typeScript'];
// skillArr[0] = 2; !!!

const skillArrGen: Array<string> = ['javaScript', 'typeScript'];
// skillArr[0] = 'someSkills'; !!!

//Enums
enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 3,
    FAILED = 10,
}

const res = {
    message: 'Paid success',
    statusCode: StatusCode.SUCCESS
}

if (res.statusCode === StatusCode.SUCCESS) {
}

const compute = () => {
    return 3;
}

//with function
enum Roles {
    ADMIN = 1,
    USER = compute(),
}

//without function
const enum Users {
    ADMIN = 1,
    USER = 2,
}

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

enum QuestionStatus {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted',
}

async function getFaqs(req: {topicId: number; status?: QuestionStatus}): Promise<{
    question: string;
    answer: string;
    tags: Array<string>;
    likes: number;
    status: QuestionStatus;
}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}


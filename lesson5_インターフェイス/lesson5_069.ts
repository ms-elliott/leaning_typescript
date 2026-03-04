interface Human3 {
    readonly name: string;
    age: number;
    greeting(message: string): void;
}

class Developer1 implements Human3 {
    // Human3をimplementsしていても、readonlyを無視することができる  (下記 name))
    constructor(public name: string, public age: number, public experience: number ){}
    greeting(message: string) {
        console.log('Hello!');
    }
}

const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message: string) {
        console.log('Hello!');
    }
}
const user: Human3 = tmpDeveloper;
let developer = new Developer('Quill', 38, 3);

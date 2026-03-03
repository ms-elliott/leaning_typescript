class Person5 {
    constructor (public name: string, protected age: number) {
    }

    incrementAge() {
        this.age += 1;
    }

    greeting2(this: Person5) {
        console.log('Hello! My name is ${this.name}. I am ${this.age} years old.');
    }
}

class Teacher1 extends Person5 {
    get subject() {
        if (this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }

    greeting2() {
        console.log('Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.');
    }
}
const teacher1 = new Teacher1('Quill', 38, 'Math');
teacher1.subject = 'Music';
console.log(teacher1.subject);
teacher1.greeting2();



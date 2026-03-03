// abstractクラスはインスタンスを生成することができない
abstract class Person7 {
    static species = 'Homo sapiens';
    static isAdult(age: number) {
        if(age > 17) return true;
        return false;
    }
    constructor (public name: string, protected age: number) {
    }

    incrementAge() {
        this.age += 1;
    }

    greeting2(this: Person7) {
        console.log('Hello! My name is ${this.name}. I am ${this.age} years old.');
        this.explainJob();
    }
    // 継承先で必ずexplainJob()があることが必須
    abstract explainJob(): void;
}

class Teacher3 extends Person7 {
    explainJob() {
        console.log('I am a teacher and Iteach ${this.subject}');
    }
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
const teacher = new Teacher3('Quill', 38, 'Math');
teacher.greeting2();

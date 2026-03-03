class Person4 {
    // protectedにすることで、継承先でも使用可能になるが、クラスの外では上書きできない
    constructor (public name: string, protected age: number) {
    }

    incrementAge() {
        this.age += 1;
    }

    greeting2(this: Person4) {
        console.log('Hello! My name is ${this.name}. I am ${this.age} years old.');
    }
}

// Person4クラスを継承したTeacherクラスを定義する
class Teacher extends Person4 {
    constructor(name: string, age: number, public subject: string) {
        // 必ずsuper()を含まないといけない
        super(name, age);
        // 上書きしない場合は、super.を付けて関数を記述
        // super.greeting2();
    }

    // 上書きする場合は再定義する
    greeting2() {
        console.log('Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.');
    }
}
const teacher = new Teacher('Quill', 38, 'Math');
teacher.greeting2();

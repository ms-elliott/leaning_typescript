class Person2 {
    name: string;

    constructor (initName: string) {
        this.name = initName;
    }

    // thisの型を定義する
    greeting(this: { name: string }) {
        console.log('My name is ${this.name}');
    }

    // クラスを型として使う
    greeting2(this: Person1) {
        console.log('Hello! My name is ${this.name}');
    }
}

const quill1 = new Person1('Quill');
console.log(quill1)


quill1.greeting();
//メソッドでthisを呼び出した場合、メソッドの左側(quill)がthisとなる。

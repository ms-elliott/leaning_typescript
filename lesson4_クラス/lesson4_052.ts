class Person1 {
    name: string;

    constructor (initName: string) {
        this.name = initName;
    }

    greeting() {
        console.log('My name is ${this.name}');
    }
}

const quill1 = new Person1('Quill');
console.log(quill1)


quill1.greeting();
//メソッドでthisを呼び出した場合、メソッドの左側(quill)がthisとなる。

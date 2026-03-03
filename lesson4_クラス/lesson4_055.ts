class Person2 {
    constructor (public name: string, private age: number) {
    }

    private incrementAge() {
        this.age += 1;
    }

    // クラスを型として使う
    greeting2(this: Person2) {
        console.log('Hello! My name is ${this.name}. I am ${this.age} years old.');
    }
}

const quill3 = new Person2('Quill', 38);


quill3.greeting2();

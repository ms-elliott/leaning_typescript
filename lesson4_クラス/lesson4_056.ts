class Person3 {
    // privateはクラスの中では書き換え可能。readonlyはクラスの中でも書き換え不可。
    readonly id: number = 32;
    constructor (public readonly name: string, private age: number) {
        // コンストラクター内は初期化処理なので、書き換え可能
        this.id = 31;
    }

    private incrementAge() {
        this.age += 1;
    }

    // クラスを型として使う
    greeting2(this: Person3) {
        console.log('Hello! My name is ${this.name}. I am ${this.age} years old.');
    }
}

const quill4 = new Person3('Quill', 38);


quill4.greeting2();

// クラス名は先頭を大文字にする
class Person {
    // フィールドを記述する
    name: string;
    // constructorで初期化する
    constructor (initName: string) {
        this.name = initName;
    }
}

const quill = new Person('Quill');
console.log(quill)

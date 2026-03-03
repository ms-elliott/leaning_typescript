class Person1 {
    // デフォルトではpublic修飾詞がついているのと同じだが、明示的に書くことも可能
    // JS(ES2022)ではpublicは何も書かない、privateは#を頭に付けることで記述可能
    name: string;
    private age: number;    // private修飾詞を付けつことで、クラスの外からはアクセスできなくなる(外から変更できなくなる)

    constructor (initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge
    }

    private incrementAge() {    // 関数にもプライベート修飾詞をつけることができる
        this.age += 1;
    }

    // クラスを型として使う
    greeting2(this: Person1) {
        console.log('Hello! My name is ${this.name}. I am ${this.age} years old.');
    }
}

const quill2 = new Person1('Quill', 38);


quill2.greeting2();

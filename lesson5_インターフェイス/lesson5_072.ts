interface addFunc1 {
    (num1: number, num2: number): number;
}

let addFunc1: addFunc1;
addFunc1 = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Nameable2 {
    name: string;
    // プロパティの後に「?」を付ける
    nickname?: string;
}

const nameable: Nameable2 = {
    name: 'Quill'
    //nicknameはあってもなくてもOK！
}

interface Human7 extends Nameable2{
    name: string;
    age: number;
    greeting(message: string): void;
}
class Developer4 implements Human7 {
    // クラスのフィールドにも「?」を使用することが可能
    gender?: string
    constructor(public name: string, public age: number, public experience: number ){}
    // 関数のパラメータの後に「?」を付けると、使用するときにパラメータがあってもなくても使用できる
    // パラメータの型の後に、なかった場合のデフォルト値を設定することも可能
    //greeting(message?: string) {
    greeting(message: string = 'hello') {
        console.log(message);
    }
}

const tmpDeveloper3 = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message: string) {
        console.log('Hello!');
    }
}
const user3: Human7 = tmpDeveloper3;
let developer4 = new Developer4('Quill', 38, 3);

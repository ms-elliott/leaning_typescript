// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
    (num1: number, num2: number): number;
}
// typeエイリアスで記述した方が関数と分かりやすい。interfaceはオブジェクトの様にも見えてややこしい。
// こういった書き方もできるが、基本的にはtypeエイリアスで関数の型を定義した方がベター

let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Nameable {
    name: string;
}

// クラスは１つのクラスしか継承できないが、interfaceは複数継承可能(「 , 」区切りで指定)
interface Human6 extends Nameable{
    // 同じ名前のものを定義した場合、条件によって上書きされる  (継承元の型に代入できるような型でしか上書きできない)
    name: string;
    age: number;
    greeting(message: string): void;
}
class Developer3 implements Human6 {
    // Human3をimplementsしていても、readonlyを無視することができる  (下記 name))
    constructor(public name: string, public age: number, public experience: number ){}
    greeting(message: string) {
        console.log('Hello!');
    }
}

const tmpDeveloper2 = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message: string) {
        console.log('Hello!');
    }
}
const user2: Human6 = tmpDeveloper2;
let developer3 = new Developer3('Quill', 38, 3);

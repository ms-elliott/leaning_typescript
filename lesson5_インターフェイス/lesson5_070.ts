interface Nameable {
    name: string;
}

// クラスは１つのクラスしか継承できないが、interfaceは複数継承可能(「 , 」区切りで指定)
interface Human4 extends Nameable{
    // 同じ名前のものを定義した場合、条件によって上書きされる  (継承元の型に代入できるような型でしか上書きできない)
    name: string;
    age: number;
    greeting(message: string): void;
}

// typeエイリアスの場合
type Nameable1 = {
    name: string;
}
type Human5 = {
    // typeエイリアスの場合、同じプロパティを定義することが可能。この場合、継承元のstring or numberを許容する
    name: number;
    age: number;
    greeting(message: string): void;
} & Nameable1

class Developer2 implements Human4 {
    // Human3をimplementsしていても、readonlyを無視することができる  (下記 name))
    constructor(public name: string, public age: number, public experience: number ){}
    greeting(message: string) {
        console.log('Hello!');
    }
}

const tmpDeveloper1 = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message: string) {
        console.log('Hello!');
    }
}
const user1: Human4 = tmpDeveloper1;
let developer2 = new Developer2('Quill', 38, 3);

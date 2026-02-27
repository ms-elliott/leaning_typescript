// 関数を保持する変数に型を付ける
function add(num1: number, num2: number): number {
    return num1 + num2
}

function sayHello(): void {
    console.log('Hello!');
}

console.log(sayHello());
let tmp: undefined;

const anotherAdd1: (n1: number, n2: number) => number = add;
// 上記を無名関数で記述する方法
const anotherAdd2: (n1: number, n2: number) => number = function (num1: number, num2: number): number { return num1 + num2 };
// 型推論の場合
const anotherAdd3 = function (num1: number, num2: number): number { return num1 + num2 };

anotherAdd1(3, 6)

// const doubleNumber1 = number => number * 2;
// パラメータが１つしかない場合でも型注釈の場合は、括弧で囲む必要がある
const doubleNumber2 = (number: number): number => number * 2;
// 左辺に型注釈をつける場合
const doubleNumber3: (num: number) => number = num => num * 2;


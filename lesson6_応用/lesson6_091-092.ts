// 引数に「...」を付けると、配列として定義できる   可変長引数：レストパラメータ
function advancedFn(...args: number[]) {
    args[0];
}
advancedFn(0, 3, 3, 3, 3, 3)

// タプルを指定する
function advancedFn1(...args: [number, string, boolean]) {
    args[0];
}
advancedFn1(0, 'hi', true)

// タプルで、オプショナルパラメータ(あってもなくてもよい引数)を指定する
function advancedFn2(...args: [number, string, boolean?]) {
    args[0];
}
advancedFn2(0, 'hi')

// タプルの末尾に型指定した可変超引数を指定することも可能
function advancedFn3(...args: [number, string, boolean, ...number[]]) {
    args[0];
}
advancedFn3(0, 'hi', true, 3, 3, 3, 5)

// labeled tuple ...タプルの各値に名前をつけることができる
// オプショナルパラメータやレストパラメータの場合は、ラベル側に「?」や「...」をつける
function advancedFn4(...args: [age: number, name: string, hasPets?: boolean, ...scores: number[]]) {
    args[0];
}

// readonly修飾詞をつける
function advancedFn5(...args: readonly[age: number, name: string, hasPets?: boolean, ...scores: number[]]) {
    // readonlyを付けると、書き換えることができなくなる為、push等はエラーになる
    // args.push();
}


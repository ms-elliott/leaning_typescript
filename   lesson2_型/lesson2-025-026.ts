// 戻り値の型はパラメータの後に記述する。戻り値は型推論でも可能。
// パラメータは型推論は不可で、必ず型注釈をつける。
function add(num1: number, num2: number): number {
    return num1 + num2
}

add(1, 2);


// 戻り値なしの関数
// ": void"を明示的に記述してもよい
function sayHello() {
    console.log('Hello!');
}
// voidは実際には、"undefined"を返している。

// typescriptの型にundifined型がある。


// [余談]
// では戻り値に"undefined"をしていすればよい？　 ->エラーとなり、voidの代わりには使えない。return;文を記述すればOK。
function sayHello2(): undefined {
    console.log('Hello!');
    return;
}
// とは言え、基本的にはvoidを使用し、undifinedは使わない。

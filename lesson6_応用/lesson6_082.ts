type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// function toUpperCase(x: string | number) {
//     if (typeof x === 'string') {
//         return x.toUpperCase();
//     }
//     return x;
// }

// const upperHello = toUpperCase('hello') as string;
// toUpperCaseの度に、as stringで型アサーションするのは面倒


// オーバーロードした時点で実際の関数の定義は無視されるので、取り得る型のパターンをオーバーロードで列挙する
// オーバーロードは上から順に適用される
// アロー関数やオブジェクトのメソッドでは、オーバーロードを使うことはできない
function toUpperCase(x: string): string;    // オーバーロード
function toUpperCase(x: number): number;    // オーバーロード
//function toUpperCase(x: string): number;    // string型を渡してnumber型を返すような、実際にはない処理のオーバーロードもエラーにならないので、注意する
function toUpperCase(x: string | number): string | number {     // 実際の関数の定義
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}

const upperHello = toUpperCase('hello');

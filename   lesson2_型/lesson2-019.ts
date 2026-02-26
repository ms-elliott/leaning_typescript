// 1つ目にString,2つ目に数値,3つ目にbooleanの型の配列を定義する
const book: [string, number, boolean] = ['bussiness', 1500, false];

// 指定した型以外を挿入しても、エラーにならない。
// TypeScriptは初期値に関しては厳しくエラーで弾くが、その後のチェックはゆるい。
book.push(21)

// 参照する際にエラーとなる
//console.log(book[3]);

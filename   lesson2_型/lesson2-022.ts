// 後ほど文字列も代入したい場合は、バーティカルラインで区切ってどちらも注釈する
let unionType: number | string = 10;
//unionType.toUpperCase() // エラーになる

unionType = 'hello'
unionType.toUpperCase()

// 数字と文字列が入る配列
let unionTypes: (number | string)[] = [21, 'hello']

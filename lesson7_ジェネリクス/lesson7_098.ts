function copy(value: any) {
    return value;
}
console.log(copy({ name: 'Quill'}) as { name: string });
// as以降でその都度、引数名と型を指定するのが面倒


// 関数名と引数の間に山括弧でかこった値を入れる。以降関数内でも使用可能。カンマで区切って複数指定可能。　　※一般的に多いのはｔypeを表すTを入れる
function copy1<T>(value: any) {
    let user: T;
    return value;
}
// 関数を呼び出す際に山括弧内で型を指定する
console.log(copy1<string>('hello'));

// 関数宣言以外(アロー関数など)でもジェネリクスを使用することができる

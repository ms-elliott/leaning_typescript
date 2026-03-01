function error(message: string) {
    throw new Error(message);
}
console.log(error('This is an error'))
// エラーは発生しているが、何も返さない  (アンデファインドも返さない)
// しかし、型推論では戻り値はvoidとなる

function error2(message: string): never {
    throw new Error(message);
}

// 定数に代入すると、戻り値の型推論はnever型となる
const er = function error(message: string) {
    throw new Error(message);
}
// 背景：後方互換性のため。never型がver.2から出来た為、先頭の場合の型推論をvoidからneverにしてしまうと正しく動かない場合が出てくる。

// never型をユニオン型の中に入れると、結果的にnever型は消える
type T = never | string

// 便利に使える場面
function getSizeName(size: 's' | 'm' | 'l') {
    switch(size) {
        case 's': return 'small'
        case 'm': return 'midium'
        case 'l': return 'large'
        default: return size satisfies never
        // defaultのsizeにホバーし、neverとなることを確認する＝網羅性を担保できる
        // or satisfiesを使用して網羅性確認できる
    }
}

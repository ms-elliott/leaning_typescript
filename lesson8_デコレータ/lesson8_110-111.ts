// classは本質的にはコンストラクタ関数の同意構文なので、Function型で定義できる
// function Logging(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

// @Logging    // クラス定義時に実行される
// class User {
//     name = 'Quill';
//     constructor() {
//         console.log('Use was created!');
//     }
// }

// デコレータを返す関数　・・・デコレータファクトリー
function Logging(message: string) {
    return function (constructor: Function) {
        console.log(message);
        console.log(constructor);
    }
}

// クラスに対してデコレータを適用させる
@Logging('Logging User')    // クラス定義時に実行される
class User {
    name = 'Quill';
    constructor() {
        console.log('Use was created!');
    }
}

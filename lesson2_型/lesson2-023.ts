// "apple"という値のみしか受け付けない。下記はエラーとなる
// const apple1: 'apple' = 'hello'
// const apple2: 0 = 32

// constにすると、リテラル型となる。
const apple3 = 'apple'
// letにすると、strign型となる。
let apple4 = 'apple'

// enumの代わりに使う
let clothSize : 'small' | 'midium' | 'large' = 'large'

const cloth: {
    color: string;
    size: 'small' | 'midium' | 'large'
} = {
    color: 'white',
    size: 'midium'
}
// 相違点：　enumはオブジェクト。

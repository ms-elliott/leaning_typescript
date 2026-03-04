interface Human1 {
    name: string;
    age: number;
    // 関数に関しては下記２通りの記述方法がある   ES5とES6の型推論の違い。
    // greeting: (message: string) => void;
    greeting(message: string): void;
}

const human: Human1 = {
    name: 'Quill',
    age: 38,
    greeting(message: string) {
        console.log(message);
    }
}

let developer: Human1;

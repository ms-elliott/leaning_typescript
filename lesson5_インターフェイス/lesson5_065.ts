// typeエイリアス
// type Human = {
//     name: string;
//     age: number;
// }

// interface
// typeエイリアスと似ているが違いは、interfaceはオブジェクトのみ。typeエイリアスは全て可。
interface Human {
    name: string;
    age: number;
}

const human: Human = {
    name: 'Quill',
    age: 38
}

let developer: Human;

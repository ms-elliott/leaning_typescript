// 型推論・・・基本の書き方
const person1 = {
    name: 'Jack',
    age: 21
}

// 型注釈
const person2: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
}

// ほぼ使わないが、"object"や"{}"でもエラーは出ない。全般的なobjectを指す。
const person3: object = {
    name: 'Jack',
    age: 21
}

// ネストの場合。
const person4 = {
    name: {
      first: 'Jack',
      last: 'Smith'
    } ,
    age: 21
}

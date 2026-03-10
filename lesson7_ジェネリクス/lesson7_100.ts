type K = keyof { name: string; age: number }
// type K = "name" | "age"  ・・・keyof演算子でオブジェクトのキーのunion型になる

// 使用例
// U extends keyof T ・・・　UはTのキーの一覧(union型)
function copy3<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
    value[key];
    return value;
}
console.log(copy3({ name: 'Quill', age: 38 }, 'name'));



// const milk = 'milk'

// as constで書くと、drinkが”milk"型になる
let milk = 'milk' as const;
let drink = milk;

// 配列にas constをつけると、readonlyのタプル型になる
const array = [10, 20] as const;

// オブジェクトにas constをつける
const peter = {
    name: 'Peter',
    age: 38
} as const;

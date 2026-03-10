// tomato型にstringが代入できる場合はnumber,そうでない場合はbooleanを返す
type ConditionalTypes = 'tomato' extends string ? number: boolean

// inferで定義すると、?の右側の式でRを使用することができる。　この場合R = 'tomato'
type ConditionalTypesInfer = { tomato: 'tomato' } extends { tomato: infer R } ? R : boolean;


type DistributiveConditionalTypes<T>= T extends 'tomato' ? number : boolean;
let tmp3: DistributiveConditionalTypes<'tomato' | 'pumpkin'>
// tmp3: number | boolean

let tmp4: NonNullable<string | null>;

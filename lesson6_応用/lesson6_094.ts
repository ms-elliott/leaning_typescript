const peter = {
    name: 'Peter',
    age: 38
} as const;
// 本来なら右辺に型を定義するところだが、 typeof演算子で実際のデータの型を指定することが可能
type PeterType = typeof peter;

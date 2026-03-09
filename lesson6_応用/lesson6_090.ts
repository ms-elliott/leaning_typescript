interface FuncA1 {
    (a: number): number;
}
interface FuncB1 {
    (a: string): string;
}

let unionFunc: FuncA1 | FuncB1;
unionFunc = function (a: string) { return 'hi' }
// パラメータはインターセクション型になる  (AかつB)　　・・・numberかつstringの型は存在しないので、「never」となる
// 戻り値はユニオン型になる　　(AあるいはB)

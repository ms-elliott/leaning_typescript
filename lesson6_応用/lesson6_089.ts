interface FuncA {
    (a: number, b: string): number;
    (a: string, b: number): number;
}
interface FuncB {
    (a: string): number;
}

let intersectionFunc: FuncB & FuncA;
intersectionFunc = function (a: number | string, b?: number | string ) { return 0 }

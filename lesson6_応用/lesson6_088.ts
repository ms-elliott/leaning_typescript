type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase1(x: string): string;
function toUpperCase1(x: number): number;
function toUpperCase1(x: string | number): string | number {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}

interface TmpFunc1 {
    (x: string): number;
    (x: number): number;
}
const upperHello2: TmpFunc1 = function (x: string | number) { return 0 };

const upperHello1 = toUpperCase1;
upperHello1('hi');
upperHello1(32);

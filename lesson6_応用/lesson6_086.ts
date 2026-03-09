let target = 'hello'        // string型
let source: 'hello' = 'hello'
target = source


// enumの場合
enum Color {
    RED,
    BLUE
}
let target1 = Color.RED;
let source1 = 100;
target1 = source1;
// enumの場合は例外で、型が合わなくても(enum型とnumber型)エラーが起きずに代入できてしまう


let target2 = function(a: string, b:string) {}
let source2 = function(a: string) {}
target2 = source2       // 型の安全が保障される場合に代入可能
target2('hi', 'hello');     //　実際に実行されるのは、source2('hi')


// クラスの場合
class AdvancedPerson {
    name: string = 'Peter'
    private age: number = 35;
}
class AdvancedCar {
    name: string = 'Prius'
    age: number = 5;
}
let target3 = new AdvancedPerson();
let source3 = new AdvancedCar();
// target3 = source3;      // ＝の左側のクラスに、privateやprotectedプロパティがあるとエラーになる。同じインスタンス同士でしか代入できない

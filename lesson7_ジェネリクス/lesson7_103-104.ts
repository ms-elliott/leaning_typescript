interface Todo {
    title: string;
    text: string;
}

// Partial・・・渡した型引数の全てのパラメータがオプショナルになる
type Todoable = Partial<Todo>
// title?: string | undefined;
// text?: string | undefined;

// Readonly・・・渡した型引数の全てのパラメータが読み取り専用になる
type ReadTodo = Readonly<Todo>

// その他にも様々なutility型がある。詳細はドキュメントを確認


// Promiss型も型引数を取ることが可能
const fetchData: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
})
// コールバック関数　 通常であれば、第一引数はunknownになるが、上記でPromise<string>とすることでstring型になる
fetchData.then(data => {
    data.toUpperCase();
})

// 配列を指す　string[]は、Array(ジェネリック型)でも表現可能
const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];

// デフォルトの型パラメータを指定する
interface ResponsData<T extends { message: string } = any> {
    data: T,
    status: number
}
let tmp: ResponsData;

const fruits1 = ['Apple', 'Banana', 'Grape']

// 型注釈の場合。
const fruits2: string[] = ['Apple', 'Banana', 'Grape']

// 文字列も数値も配列に入れたい場合は、型注釈で下記の様に記述or型推論に任せる。
const fruits3: any[] = ['Apple', 'Banana', 'Grape', 1]

// １つの型のみしか受け付けない様にするには、基本的に型注釈で記述する。

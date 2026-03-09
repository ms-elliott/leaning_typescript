interface Designer {
    name: string
    [index: string]: string;    // インデックスシグネチャ　　自由に文字列のプロパティを設定することが可能。readonly修飾詞を付与することも可能
    // インデックスシグネチャを使用した場合は、他のプロパティ(今回の場合はname)は、インデックスシグネチャの型に含まれる型にすること
}
const designer: Designer = {
    name: 'Quill',
}
let foo = 'name'
designer[foo].toUpperCase()
designer.foo = 'foo'
designer.hoge = 'hoge'  // インデックスシグネチャを使用した場合、定義していないプロパティでもエラーを吐かないので注意

// オプション設定で「noUncheckedIndexAccess」をONにすると、インデックスシグネチャのプロパティが「string | undefined」のunion型になる
// 意図しないエラーを避ける為にも、インデックスシグネチャを使う場合は設定をONにすることを推奨

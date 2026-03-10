type FirstName = 'John' | 'Paul'
type LastName = 'Lennon' | 'MacCartney'

// JS: バッククォートで囲んだ中に ${} で記述すると、動的に中身を変えることができる = テンプレートリテラル
// TS: TypaScriptではテンプレートリテラルを型でも使用することができる
type UserName = `${FirstName}-${LastName}`      // "John-Lennon" | "John-McCartoney" | "Paul-Lennon" | "Paul-McCartoney"

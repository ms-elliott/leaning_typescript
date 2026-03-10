type MappedTypes = {
    // 文字列リテラルのunion型で記述する
    [P in 'tomato' | 'pumpkin']: P
    // 'tomato': tomato
    // 'pumpkin': pumpkin
    // Pをstringにすると
    // 'tomato': string ~ となる

}

// よくある書き方
interface Vegetables1 {
    tomato: string;
    pumpkin: string;
}
type MappedTypes1 = {
    // 先頭にreadonly、末尾に?をつけることも可能。　　　応用： 「-readonly」とするとVegetablesの中のreadonlyが全て消える。「-?」も同様
    [P in keyof Vegetables1]: string
}


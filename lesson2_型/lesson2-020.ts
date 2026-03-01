enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

// 下記の記述でも良い。この場合は、SHORT = 0となる
enum CoffeeSize２ {
    SHORT,
    TALL,
    GRANDE,
    VENTI,
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
    // 特定のグループのデータからのみ選択できる様にする。
}

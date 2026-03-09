// js
// symbol は絶対に他と被らないことが保障されているデータ
// const symbol1 = Symbol()
// const symbol2 = Symbol()
// console.log(symbol1, symbol2)

// ts
const symbol1: unique symbol = Symbol()
const symbol2 = Symbol()
function myFunc(mySymbol: symbol) {}
myFunc(symbol1)
myFunc(symbol2)

function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2)
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum
});

interface DowloadedData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}
const downloadedData: DowloadedData = {
    id: 1
}

// console.log(downloadedData.user.name);  // エラーが起きる

// 解決策①
console.log(downloadedData.user!.name);
// 解決策②
if (downloadedData.user) {
    console.log(downloadedData.user.name)
}
// 解決策③ optional chaining
console.log(downloadedData.user?.name?.first);     // .userがnullの場合は、undefinedを返す

const userData = downloadedData.user ?? 'no-user';   // nullish coalescing・・・　??の左辺がnull or undefinedであれば右辺を返す
const userData1 = downloadedData.user || 'no-user';   // null or undefined以外に、空文字やfalse、0の場合も、右辺の値を返す

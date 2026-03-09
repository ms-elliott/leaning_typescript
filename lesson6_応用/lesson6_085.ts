interface DowloadedData1 {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    },
    // 0: number
}
const downloadedData: DowloadedData1 = {
    id: 1
}

console.log(downloadedData.user?.name?.first);

const userData = downloadedData.user ?? 'no-user';
type id = DowloadedData1["id"];     // シングルクォートやバッククォートで書いてもOK
// type name = DowloadedData1["user"]["name"];  // userの?を削除すれば、階層のプロパティを取得できる
type id1 = DowloadedData1["id" | "user"];     // union型で指定することも可能
// type id2 = DowloadedData1[0];       // 数値で指定することも可能

type StringArrray = string[];
type ArrayValue = StringArrray[number];

type TupleType = [string, number, boolean]
type TupleValue = TupleType[number]

// LookUp型(インデックス型))　　・・・[]で指定する型

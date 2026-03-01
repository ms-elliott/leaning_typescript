let unknownInput: unknown;
let anyInput: any;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// unknownの場合、なんでも代入可能だが、使用する時に厳しくチェックする
// コードで型を絞り込む必要がある。　 (タイプガード、ナローイング)
let text = unknownInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}


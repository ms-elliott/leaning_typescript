class Dog1 {
    // タグ付きunion  (リテラル型のタグを付ける)
    kind: 'dog' = 'dog'
    speak(){
        console.log('bow-bow');
    }
}
class Bird1 {
    kind: 'bird' = 'bird'
    speak(){
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
type Pet1 = Dog1 | Bird1;
function havePet1(pet: Pet1) {
    pet.speak();
    // タグで判別する
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird1) {
        pet.fly();
    }
}
havePet1(new Bird1);
// interfaceでも同様にタグをつけることが可能

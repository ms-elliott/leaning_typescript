type Engineer1 = {
    name: string;
    role: string;
}
type Blogger1 = {
    name: string;
    follower: number;
}

type EngineerBlogger1 = Engineer1 & Blogger1;

const quill1: EngineerBlogger1 = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}

type NumberBoolean1 = number | boolean;
type StringNumber1 = string | number;
type Mix1 = NumberBoolean1 & StringNumber1;

// ①typeof演算子
function toUpperCase(x: string | number) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}

// ②in演算子
type NomadWorker = Engineer1 | Blogger1;
function describeProfile(nomadWorker: NomadWorker) {
    // ここでnomadWorkerのアクセス可能なプロパティはEngineerとBloggerの両方に共通しているnameのみ
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        // in演算子でナロイングすると、roleプロパティにもアクセス可能になる
        console.log(nomadWorker.role);  // ここでのnomadWorkerの型は、Engineerとなる
    }
}

// ③instanceof演算子
class Dog {
    speak(){
        console.log('bow-bow');
    }
}
class Bird {
    speak(){
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird);  // [tweet-tweet][flutter]と出力される
havePet(new Dog);   // [bow-bow]と出力される
havePet({ speak() { console.log('hello') }, fly() { console.log('not fly') } });    // Birdっぽくfly関数を定義しても、Birdではないと判断され、[hello]のみ出力される

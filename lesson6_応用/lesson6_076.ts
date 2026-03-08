type Engineer = {
    name: string;
    role: string;
}
type Blogger = {
    name: string;
    follower: number;
}

type EngineerBlogger = Engineer & Blogger;
// interfaceで定義する場合
// interface EngineerBlogger extends Engineer, Blogger { };

const quill: EngineerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;    // つまりnumberのみを許容する

function copy4<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
    value[key];
    return value;
}
console.log(copy4({ name: 'Quill', age: 38 }, 'name'));

class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T) {
        this.data.push(item)
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());


//interfaceの場合
interface TmpDatabase<T> {
    id: number;
    data: T[];
}

// 必ず明示的に型を記述する必要がある
const tmpDatabase: TmpDatabase<number> = {
    id: 3,
    data: [32]
}

//typeエイリアスの場合
type TmpDatabase1<T> = {
    id: number;
    data: T[];
}

const tmpDatabase1: TmpDatabase1<number> = {
    id: 3,
    data: [32]
}

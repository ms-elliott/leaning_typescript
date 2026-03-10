function Component(template: string, selector: string) {
    return function (constructor: { new(...args: any[]): { name: string } }) {
        const mountedElement = document.querySelector(selector);     // selector = '#app'
        const instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            mountedElement.querySelector('h1')!.textContent = instance.name;
        }
 }}


// index.html のid="app"の部分に、第一引数のコンポーネントを入れる
@Component('<h1>{{ name }}</h1>', '#app')

class User1 {
    name = 'Quill';
    constructor() {
        console.log('Use was created!');
    }
}

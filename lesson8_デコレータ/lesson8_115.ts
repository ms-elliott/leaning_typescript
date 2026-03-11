// クラスを受け取り、別のクラスを定義して返す
function Component2(template: string, selector: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(constructor: T,) {     // constructor: User(クラス)
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

function PropertyLogging(target: any, propertyKey: string) {
    console.log('propertyLogging');
    console.log(target);
    console.log(propertyKey);
}

@Component2("<h1>{{ name }}</h1>", "#app")
class User3 {
  name = "Quill";
  constructor(public age: number) {
    console.log("Use was created!");
  }
}
const user4 = new User3(32);
const user5 = new User3(32);
const user6 = new User3(32);

// TODO 18: 在这里写实现代码
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // eslint-disable-next-line camelcase
  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}

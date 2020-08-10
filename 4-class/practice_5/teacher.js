// TODO 20: 在这里写实现代码
import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    if (this.klass) {
      return `${super.introduce()} I am a Student. I teach No Class.`;
    } else {
      return `${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
    }
  }
}

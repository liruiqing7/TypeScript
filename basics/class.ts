//typescript中的类和ES6（js）中的类相类似，只是ts在js的基础上做了类的特性的拓展
class Person {
  //定义类
  name = "lee";
  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  //类的继承 Teacher是子类 Person是父类
  getTeacherName() {
    return "Teacher";
  }
  //类的重写
  getName() {
    return super.getName() + "ruiqing";
    /**
     * 通过super调用父级中的方法，一般子类将父类中的某一个方法覆盖掉的时候，如果还想调用父类的方法，可以使用super调用
     */
  }
}
const teacher = new Teacher();
console.log(teacher.getName()); //打印: leeruiqing
console.log(teacher.getTeacherName()); //打印: Teacher

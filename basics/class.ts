//typescript中的类和ES6（js）中的类相类似，只是ts在js的基础上做了类的特性的拓展
class PersonName {
  //定义类
  name = "lee";
  getName() {
    return this.name;
  }
}

class TeacherName extends PersonName {
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
const teacherName = new Teacher();
console.log(teacherName.getName()); //打印: leeruiqing
console.log(teacherName.getTeacherName()); //打印: Teacher

/**
 * 类的属性，方法和访问类型
 */
// private ,protected,public 三种访问类型
//public 允许我在类的内外被调用
//private 只允许在类内被调用
//protected 允许在类内及继承给的子类使用
class PersonPublic {
  publicName?: string; //这种方式等价于 public name:string （默认）
  sayHi(){
    this.publicName; //类内调用
    console.log('hi')
  }
}

class Teachers extends PersonPublic { //继承父类
  public sayBye(){
    this.publicName //在子类中调用
  }
}

const persons = new PersonPublic();

persons.publicName = "dell";//类外调用

console.log(persons.publicName);


//constructor  new一个实例的瞬间会执行
class Persont {
  //传统写法
  // private name :string
  // constructor(name:string){
  //   this.name = name
  // }
  //简化写法
  constructor (public name:string){}
}
const persont = new Persont('dell')

class Personts {
  constructor(public name:string){}
}
class Teacherts extends Personts{
  sayHi(){
    constructor(public age:number){
      super(this.sayHi)
    }
  }
}

connst teacher = new Teacher(28)
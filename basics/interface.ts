//interface 接口

//interface 和 type 相类似，但并不完全一致
//接口只是我们写ts文件时，帮助我们有一个语法提示的作用，在编译的时候，接口会被剔除。

interface Person {
  name: string;
  // readonly name: string;
  //readonly 设置只读属性
  age?: number;
  [propName: string]: any;
  say(): string;
}

interface Teacher extends Person {
  //继承接口
  teach(): string;
}

interface SayHi {
  //定义一个函数类型的声明，例子：定义一个函数接收一个string类型参数，并且返回值也是一个string。
  (word: string): string;
}

// type Person1 = string;
// type 类型别名和接口的区别:type类型别名可以直接代表类型,例如string,但是interface只可以代表一个函数或者对象，但不可以直接代表基础类型。
// 在TS中，我们尽量用interface接口来表述类型。
type Person1 = {
  name: string;
};

const getPersonName = (person: Person) => {
  console.log(person.name);
};

const setPersonName = (person: Teacher, name: string) => {
  person.name = name;
};

const person = {
  name: "dell",
  age: 18,
  sex: "male",
  say() {
    return "say hello";
  },
  teach() {
    return "lee";
  },
};

/*
getPersonName({
  name: "dell",
  age: 18,
  sex: "male",

});
//如果直接以字面量形式传递对象给变量时，Ts会对对象进行强校验。所以可以用一个变量缓存一下。
//也可以使用[propName: string]: any; 的形式定义。
*/

getPersonName(person);

setPersonName(person, "lee");

class User implements Person {
  //一个类应用某个接口
  name = "dell";
  say() {
    return "hello";
  }
}

const say: SayHi = (word: string) => {
  return "hello lee";
};

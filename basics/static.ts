//静态类型

interface Point {
  x: number;
  y: number;
}

const point: Point = {
  x: 3,
  y: 4,
};

point.x;

/*静态类型，不仅意味着这个变量的类型不能修改，也意味着变量上的属性和方法基本也就确定了，
他会继承接口定义下该数据的所有属性，并且编辑器就能给我们更好的提示。*/

//基础类型与对象类型

const count: number = 123;
const studentName: string = "liruiqing";
//基础类型还包括null,undefined,symbol,boolean等,void。

//对象类型

class Person {}

const teacher: {
  name: string;
  age: number;
} = {
  name: "liruiqing",
  age: 18,
};

const numbers: number[] = [1, 2, 3];

const lee: Person = new Person();

const getTotal: () => number = () => {
  return 18;
};

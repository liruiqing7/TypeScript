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

let num: number; //type annotation 类型注解,我们来告诉TS变量是什么类型
num = 123;

let numInference = 123; //type inference 类型推断,TS 会自动的去尝试分析变量的类型

//如果TS能够自动分析变量类型，我们就不需要做什么，如果TS无法分析变量类型，需要我们使用类型注解。

// const firstNumber = 1;
// const secondNumber = 2;
// const total = firstNumber + secondNumber; 不需要加

// function getTotals(firstNumber:number,secondNumber:number){ 需要加
//   return firstNumber + secondNumber
// }

// const totals = getTotals(1,2); totals被类型推断

// const obj = {
//   name:'liruiqing',
//   age :18
// }

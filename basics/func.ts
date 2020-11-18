function hello() {}
const hello1 = function () {};
const hello2 = () => {};

function add(first: number, second: number): number {
  return first + second;
}

const total = add(1, 2);

function sayHello(): void {
  //定义函数返回值为void
  console.log("hi");
}

function errorEmitter(): never {
  //返回值定义该函数永远执行下去
  while (true) {} //永远不会执行
}

function adds({ first, second }: { first: number; second: number }): number {
  return first + second;
}

function getNumbers({ first }: { first: number }) {
  //解构语法类型注解，前面做解构，后面跟上解构语法的注解
  return first;
}

/**
 * 复习
 */

//基础类型 :boolean,number,string,void,undefined,symbol,null
let countNumber: number; //不定义就没法推断
countNumber = 123;

//对象类型 :{},Class,function,[]

const funC = (str: string): number => {
  return parseInt(str, 10);
};

const funC1: (str: string) => number = (str) => {
  //冒号后跟的一般都是函数的类型，等号后跟的是函数的具体实现
  return parseInt(str, 10);
};
//一个函数的入参,一般需要手动注解，但是返回值基本会被推断出来。

const date = new Date(); //推断出Data类型

//其他的 case
interface Person {
  name: "string";
}
const rawData = '{"name":"lee"}';
const newData = JSON.parse(rawData);
//内置函数有时候无法使TS推断出类型，需要自定义，例如定义一个interface添加注解。

let temp: number | string = 123;
temp = "456";

/**
 * 当TS可以推断出类型时，尽量不要用注解。
 * number，string类型与Number，String类型一个是数字/字符类型，一个是new出来的数字/字符类型，建议用小写。
 */

const arr: (number | string)[] = [1, "2", 3];
const stringArr: string[] = ["a", "b", "c"];
const undefinedArr: undefined[] = [undefined];

//type alias 类型别名
// type User = { name: string; age: number };

class Teacher {
  name?: string;
  age?: number;
}

const objectArr: Teacher[] = [{ name: "lee", age: 18 }];

// const objectArr: { name: string; age: number }[] = [{ name: "lee", age: 18 }];

/*
 * 元组 tuple
 * 元组的使用场景:excel,csv文件
 */
const teacberInfo: [string, string, number] = ["Dell", "male", 18];

//csv
const teacherList: [string, string, number][] = [
  ["dell", "male", 18],
  ["sun", "female", 26],
  ["jeny", "female", 38],
];

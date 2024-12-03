// 物件的ts型別
// 1. 物件型別: {key: value}
// 2. 陣列物件型別: {key: value}[]
// 3. 任意型態物件: {key: any}
// 4. 任意型態陣列物件: {key: any}[]

// 物件示範
let obj1: { name: string; age: number } = { name: "Tom", age: 18 };
let obj2: { name: string; age: number }[] = [
  { name: "Tom", age: 18 },
  { name: "Mary", age: 20 },
];
let obj3: { name: any; age: any } = { name: "Tom", age: 18 };
let obj4: { name: any; age: any }[] = [
  { name: "Tom", age: 18 },
  { name: "Mary", age: 20 },
];
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);

// 物件也可以用interface(介面)來定義
interface Person {
  name: string;
  age: number;
}
let obj5: Person = { name: "Tom", age: 18 };
// console.log(obj5); // { name: 'Tom', age: 18 }

// 介面也能有可選屬性
interface Person2 {
  name: string;
  age?: number;
}
let obj6: Person2 = { name: "Tom" };
// console.log(obj6); // { name: 'Tom' }

// 介面也能有任意屬性
interface Person3 {
  name: string;
  age?: number;
  [propName: string]: any;
}
let obj7: Person3 = { name: "Tom", age: 18, gender: "male" };
// console.log(obj7); // { name: 'Tom', age: 18, gender: "male"}

// 但若是任意屬性指定型別，則確定屬性和可選屬性的型別都必須是它的型別的子集
// interface Person4 {
//   name: string;
//   age?: number;
//   [propName: string]: string;
// }
// let obj8: Person4 = { name: "Tom", age: 18, gender: "male" };
// 這邊就會報錯
// Property 'age' is incompatible with index signature.
// Type 'number' is not assignable to type 'string'.
// console.log(obj8); // { name: 'Tom', age: '18', gender: "male" }

// 介面也能設定唯讀屬性
interface Person5 {
  readonly id: number;
  name: string;
}
let obj9: Person5 = { id: 123, name: "Tom" };
// obj9.id = 456;

// 這邊會報錯
// Cannot assign to 'id' because it is a read-only property.
// console.log(obj9); // { id: 123, name: 'Tom' }

// 注意：唯讀的約束存在於第一次給「物件」賦值的時候，而不是第一次給「唯讀屬性」賦值的時候
// interface Person6 {
//   readonly id: number;
//   name: string;
// }
// let obj10: Person6 = { name: "Tom" };
// obj10.id = 456;
// 這邊會報錯
// Property 'id' is missing in type '{ name: string; }' but required in type 'Person6'.
// Cannot assign to 'id' because it is a read-only property.

// 介面也能繼承
interface Animal {
  name: string;
}
interface Dog extends Animal {
  age: number;
}
let dog: Dog = { name: "Tom", age: 3 };
// console.log(dog); // { name: 'Tom', age: 3 }

// 介面也能繼承多個介面
interface Animal2 {
  name: string;
}
interface Run {
  run(): void;
}
interface Dog2 extends Animal2, Run {
  age: number;
}
let dog2: Dog2 = {
  name: "Tom",
  age: 3,
  run() {
    console.log("run");
  },
};
// console.log(dog2); // { name: 'Tom', age: 3, run: [Function: run] }
// dog2.run(); // run

// 介面也能用來描述陣列
interface NumberArray {
  [index: number]: number;
}
let arr: NumberArray = [1, 2, 3];
// console.log(arr); // [ 1, 2, 3 ]
// 但是比較複雜，所以建議使用泛型

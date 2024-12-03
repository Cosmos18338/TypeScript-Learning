// indexable type(索引型別): 可以用來描述物件的索引的型別

// 1. 索引型別的語法
// 索引型別的語法是使用中括號[]，並在中括號[]中放入索引的型別
// 索引型別的型別可以是數值(numeric)或字串(string)

// 範例: 使用數值(numeric)索引型別
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
// console.log(myStr); // Bob

// 範例: 使用字串(string)索引型別
interface NumberArray {
  [index: string]: string;
}
let myArray2: NumberArray = {
  a: "Bob",
  b: "Fred",
};
console.log(myArray2["b"]); // Fred

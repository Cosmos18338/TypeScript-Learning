// 物件的ts型別
// 1. 物件型別: {key: value}
// 2. 陣列物件型別: {key: value}[]
// 3. 任意型態物件: {key: any}
// 4. 任意型態陣列物件: {key: any}[]
// 物件示範
var obj1 = { name: "Tom", age: 18 };
var obj2 = [
    { name: "Tom", age: 18 },
    { name: "Mary", age: 20 },
];
var obj3 = { name: "Tom", age: 18 };
var obj4 = [
    { name: "Tom", age: 18 },
    { name: "Mary", age: 20 },
];
var obj5 = { name: "Tom", age: 18 };
var obj6 = { name: "Tom" };
var obj7 = { name: "Tom", age: 18, gender: "male" };
var obj9 = { id: 123, name: "Tom" };
var dog = { name: "Tom", age: 3 };
var dog2 = {
    name: "Tom",
    age: 3,
    run: function () {
        console.log("run");
    },
};
var arr = [1, 2, 3];
console.log(arr); // [ 1, 2, 3 ]

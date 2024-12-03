// 函式的資料型別
// 基本語法
// function add(a: number, b: number): number {
//   return a + b;
// }
// let sum: number = add(1, 2);
// console.log(sum); // 3
// 在傳入參數跟回傳值都能指定資料型別
// 可以使用 void 表示沒有回傳值的函式
// 可選參數
// function buildName(firstName: string, lastName?: string): string {
//   if (lastName) {
//     return firstName + ' ' + lastName;
//   } else {
//     return firstName;
//   }
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom');
// console.log(tomcat); // Tom Cat
// console.log(tom); // Tom
// 可選參數必須在必要參數後面，可選參數後面不允許再出現必要參數
// 預設參數
// function buildName(firstName: string, lastName: string = 'Cat'): string {
//   return firstName + ' ' + lastName;
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom');
// console.log(tomcat); // Tom Cat
// console.log(tom); // Tom Cat
// 預設參數不受可選參數的限制，可以在必要參數前或後
// 當有預設參數時，若不傳入該參數，則會使用預設參數的值
// 剩餘參數
// function push(array: number[], ...items: number[]): void {
//   items.forEach((item) => {
//     array.push(item);
//   });
// }
// let a = [];
// push(a, 1, 2, 3);
// console.log(a); // [1, 2, 3]
// 剩餘參數會將傳入函式的所有參數放入一個陣列中
// 剩餘參數只能是最後一個參數
// 函式重載
// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''));
//   } else if (typeof x === 'string') {
//     return x.split('').reverse().join('');
//   }
// }
// console.log(reverse(123)); // 321
// console.log(reverse('hello')); // olleh
// 函式重載是指在相同的函式名稱下，可以定義不同的函式定義
// 編譯器會根據傳入的參數自動判斷使用哪一個函式定義
// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''));
//   } else if (typeof x === 'string') {
//     return x.split('').reverse().join('');
//   }
// }
// console.log(reverse(123)); // 321
// console.log(reverse('hello')); // olleh
// 函式重載只能使用 function 定義，不能使用箭頭函式
// 練習
// 定義一個函式，接受一個數字的陣列，回傳加總的結果
function sum(numbers) {
    // return numbers.reduce((a, b) => a + b, 0);
    var total = 0;
    numbers.forEach(function (number) {
        total += number;
    });
    return total;
}
var result = sum([1, 2, 3]);
console.log(result); // 6

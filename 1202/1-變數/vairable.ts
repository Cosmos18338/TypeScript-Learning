// typescript 是一種強型態的語言，所以我們可以在變數後面加上型態
// 這樣可以減少錯誤，增加程式碼的可讀性
// 首先需要安裝typescript
// npm i typescript -g
// 然後就可以使用tsc指令來編譯typescript檔案

// // 基礎JS
// let a = 1;
// let b = 2;
// let c = a + b;
// console.log(c); // 3
// tsc 檔案名稱.ts 會產生一個 .js 檔案，是編譯後的檔案
// 再用 node 檔案名稱.js 執行

// 基礎TS
// let a: string = "1";
// let b: string = "2";
// let c: string = a + b;
// console.log(c);
// c會是12

// 錯誤示範
// let a: string = "1";
// let b: string = 2;
// let c: string = a + b;
// console.log(c);
// 這樣會報錯，因為b的型態是number，不是string

// 兩邊差別在於有沒有宣告型態
// TS基本資料型別有number, string, boolean, 也可以宣告any型態
// any型態可以接受任何型態的資料，但是不建議使用，因為會失去TS的優勢
// 也可以宣告陣列型態
// 1. 數字陣列: number[], Array<number>
// 2. 字串陣列: string[], Array<string>
// 3. 布林陣列: boolean[], Array<boolean>
// 4. 任意型態陣列: any[], Array<any>
// Array<T> 是泛型，T代表型態，所以Array<number>就是數字陣列

//　陣列示範
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let arr3: string[] = ["1", "2", "3"];
let arr4: Array<string> = ["1", "2", "3"];
let arr5: boolean[] = [true, false];
let arr6: Array<boolean> = [true, false];
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);

// 型別
// 除了一開始使用的基礎型別如 string、number、boolean、null、undefined、void之外
// TypeScript還有很多其他的型別，像是在物件中有使用到的interface(介面)及enum(列舉)、any(任意型別)等

// 介面
interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: "Tom",
  age: 25,
};

// any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
// 任意型別會在編譯時期跳過型別檢查，所以在使用時要特別小心
// 也盡量別使用any型別，因為這樣會失去TypeScript的優勢

// void
function warnUser(): void {
  console.log("This is my warning message");
}
// void型別表示沒有任何型別，通常用在函數沒有返回值時

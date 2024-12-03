// enum型別
// enum型別是一種特殊的型別，它是一個具有數值鍵值(numeric key)的物件
// enum型別的數值鍵值(numeric key)是從0開始遞增的數字，也可以自訂數值鍵值(numeric key)的值
// enum型別的值(value)是只讀的，不可以修改
// enum型別的值(value)可以是數值(numeric)或字串(string)
// 使用 enum 來宣告 enum型別
enum Gender {
  male,
  female,
  other,
}

// 使用數值鍵值(numeric key)存取，可以得到對應的值(key)
console.log(Gender[0]); // male
console.log(Gender[1]); // female
console.log(Gender[2]); // other

// 使用值(value)存取，可以得到對應的數值鍵值(numeric key)
console.log(Gender.male); // 0
console.log(Gender.female); // 1
console.log(Gender.other); // 2

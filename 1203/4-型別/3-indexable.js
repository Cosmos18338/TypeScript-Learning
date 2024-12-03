// indexable type(索引型別): 可以用來描述物件的索引的型別
var myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr); // Bob
var myArray2 = {
    a: "Bob",
    b: "Fred",
};
console.log(myArray2["b"]); // Fred

// class(類別)
// 使用class關鍵字來定義類別
// 使用constructor來定義建構函式
// 使用new關鍵字來建立新物件
// 類別不能當作函式被呼叫
// 類別可以包含
// 1. 屬性
// 2. 建構函式
// 3. 函式
// 類別的宣告
var employee = /** @class */ (function () {
    // 建構函式
    function employee(id, name) {
        this.id = id;
        this.name = name;
    }
    // 函式
    employee.prototype.display = function () {
        console.log("id: ".concat(this.id, ", name: ").concat(this.name));
    };
    return employee;
}());
// 宣告後可以使用new關鍵字來建立新物件
var emp1 = new employee(1, "John");
var emp2 = new employee(2, "Mary");
console.log(emp1.id);
console.log(emp1.name);
emp1.display();
console.log(emp2.id);
console.log(emp2.name);
emp2.display();
// 建構函式的參數可以加上存取修飾子
// 存取修飾子有public, private, protected
// public: 可以在任何地方存取
// private: 只能在類別內部存取
// protected: 只能在類別內部或繼承的子類別存取
//範例
var employee2 = /** @class */ (function () {
    // 建構函式
    function employee2(id, name) {
        this.id = id;
        this.name = name;
    }
    // 函式
    employee2.prototype.display = function () {
        console.log("id: ".concat(this.id, ", name: ").concat(this.name));
    };
    return employee2;
}());
var emp3 = new employee2(1, "John");
// console.log(emp3.id); // error
// console.log(emp3.name); // error

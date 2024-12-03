// 除了可以用interface(介面)來定義物件，也可以匿名定義物件
// 這樣的好處是可以直接在函式的參數中定義物件，不用另外定義interface
// 範例
function printPerson(person) {
    console.log(person.name, "is", person.age, "years old");
}
var Google = {
    name: "Google",
    desciption: "Search Engine",
    employees: [
        { name: "John", role: "Developer" },
        { name: "Jane", role: "Designer" },
    ],
    count: function () {
        return this.employees.length;
    },
};
function list(company) {
    company.employees.forEach(function (employee) {
        console.log(employee.name, employee.role);
    });
}
list(Google); // John Developer, Jane Designer
console.log(Google.count()); // 2

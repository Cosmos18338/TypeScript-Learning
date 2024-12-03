// 除了可以用interface(介面)來定義物件，也可以匿名定義物件
// 這樣的好處是可以直接在函式的參數中定義物件，不用另外定義interface

// 範例
function printPerson(person: { name: string; age: number }) {
  console.log(person.name, "is", person.age, "years old");
}

// printPerson({ name: "John", age: 30 }); // John is 30 years old

// interface中的屬性也可以再被interface包裹
// 範例
interface employee {
  name: string;
  role: string;
}

interface company {
  name: string;
  desciption: string;
  employees: employee[];
  count: Function;
}

let Google: company = {
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

function list(company: company) {
  company.employees.forEach((employee) => {
    console.log(employee.name, employee.role);
  });
}

list(Google); // John Developer, Jane Designer
console.log(Google.count()); // 2

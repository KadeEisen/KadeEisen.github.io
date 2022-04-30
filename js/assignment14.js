// Problem 1
let sam = {
    "firstName": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raiseEligible": true
}

let mary = {
    "firstName": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raiseEligible": true
}

let bill = {
    "firstName": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raiseEligible": false
}

console.log("****** PROBLEM 1 ******");
console.log(sam);
console.log(mary);
console.log(bill);


// Problem 2
let company = {
  "companyName": "Tech Stars",
  "website": "www.techstars.site",
  "employees": [
    {
      "firstName": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raiseEligible": true
    },
    {
      "firstName": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raiseEligible": true
    },
    {
      "firstName": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raiseEligible": false
    }
  ]
}

console.log("****** PROBLEM 2 ******");
console.log(company);


// Problem 3
const newEmployee = {
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseEligible": false
}

function addEmployee(obj){
    company.employees.push(obj);
}

addEmployee(newEmployee);
console.log("****** PROBLEM 3 ******");
console.log(company);


// Problem 4
for(const index in company.employees){
    // console.log(`${company['employees'][index]['fName']}: ${company['employees'][index]['salary']}`);
    console.log(`${company.employees[index].firstName}: ${company.employees[index].salary}`);
    // console.log(company.employees[index].fName);
    totalSalary += company["employees"][index]["salary"];
}
console.log("****** PROBLEM 4 ******");
console.log("total salary: "+totalSalary);


// Problem 5
console.log("****** PROBLEM 5 ******");

for(const index in company.employees){
    let currSalary = company['employees'][index]['salary'];
    if(company['employees'][index]['raiseEligible'] == true){
        giveRaise(currSalary, index);
    }
}

function giveRaise(original, i){
    let newSalary = (original * 0.10) + original;
    company['employees'][i]['salary'] = newSalary;
    company['employees'][i]['raiseEligible'] = false;

    console.log(`${`${company['employees'][i]['firstName']}: ` + original} --> ${company['employees'][i]['salary']}`);
}


// Problem 6

for (const index in company.employees) {
    if(company['employees'][index]['firstName'] == "Anna" || company['employees'][index]['firstName'] == "Sam" ){
        company['employees'][index]['wfh'] = true;
    }else company['employees'][index]['wfh'] = false;
}

console.log("****** PROBLEM 6 ******");
console.log(company);

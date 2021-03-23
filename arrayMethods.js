const fetchUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log("Actual data from the server", data);

  //Loop data using for

  //   for (let i = 0; i < data.length; i++) {
  //     console.log("Looping the array using for loop", data[i]);
  //   }

  // Loop data using forEach

  //   data.forEach(function (data) {
  //     console.log("Looping the array using forEach", data);
  //   });
};

fetchUser();

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//  **** Filter the ages array over 20 using for loop \

// let newArray = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 20) {
//     newArray.push(ages[i]);
//   }
// }

//  **** Filter the ages array over 20 using fliter \

// const agesOverTwenty = ages.filter((age) => age > 20);
// console.log(agesOverTwenty);

//  **** Filter the companies array starts after 1990 using fliter \

// const companiesStartAfter90 = companies.filter(
//   (company) => company.start >= 1990
// );
// console.log(companiesStartAfter90);

// ****  Filter the companies array category Finance using fliter ****\

// const financeCompanies = companies.filter(
//   (company) => company.category === "Finance"
// );
// console.log(financeCompanies);

// ****  Create a new Array with Company name using maps****\

// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// ****  Create a new Array with Company name using maps****\

// const companyMap = companies.map(
//   (company) => `${company.name} From: ${company.start} To: ${company.end}`
// );
// console.log(companyMap);

// ****  Sort the company start year****\

// const sortCompanies = companies.sort((c1, c2) =>
//   c1.start > c2.start ? 1 : -1
// );
// console.log(sortCompanies);

// ****  Sort the ages****\

// const sortAges = ages.sort((a, b) => a - b);
// const sortAges = ages.sort((a, b) => b - a);
// console.log(sortAges);

// **** total the age using reduce ****\

// const totalAges = ages.reduce((total, age) => total + age);
// console.log(totalAges);

// const totalYearsOfComp = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYearsOfComp);

// **** Combined Array methods **** //

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age > 30)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);

console.log(combined);

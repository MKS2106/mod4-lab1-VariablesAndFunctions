// This is the code for Module 4 - Lab1 (Variables and Funtions)

console.log("Module 4: Lab_1 - Task_1");
// Prompting user to get First and Last Name
let firstName = prompt("Please enter your first name");
let lastName = prompt("Please enter your Last name");
//Capitalize the first letter
function capitaliseName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
function formatFullName(firstName, lastName) {
  if (firstName === "" || lastName === "") {
    return "Invalid Name Input";
  } else {
    let capitalisedLname = capitaliseName(lastName);
    let capitalisedFname = capitaliseName(firstName);
    // console.log(capitalisedFname);
    // console.log(capitalisedLname);
    return capitalisedLname + " " + capitalisedFname;
  }
}
console.log(formatFullName(firstName, lastName));

console.log("Module 4: Lab_1 - Task_2");
// let price = 1000;
// let quantity = 25;
// let taxRate = 2;
const inputString = prompt(
  "Enter price, quantity and taxRate in the same order separated by commas:"
);
const inputArray = inputString.split(",");
console.log(inputArray);

function calculateTotalCost(inputArray) {
  let price = Number(inputArray[0]);
  console.log("price:", price);
  let quantity = Number(inputArray[1]);
  console.log("Quantity:", quantity);
  let taxRate = Number(inputArray[2]);
  console.log("Tax Rate:", taxRate);

  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
    console.log("Invalid input");
  } else {
    totalCost = price * quantity * (1 + taxRate);
    return totalCost;
  }
}
console.log(calculateTotalCost(inputArray));

console.log("Module 4: Lab_1 - Task_3");
let age = prompt("Enter person's age:");
// let isEmployed = false;
let stringValue = prompt(
  "Please enter 'yes' if the person is employed, if not please enter 'no' "
);
let isEmployed = convertYesToTrue(stringValue);
console.log(isEmployed);

function convertYesToTrue(value) {
  // if (typeof value !== 'string') {
  //   return false; // Or handle non-string input as needed
  // }
  return value.toLowerCase() === "yes";
}
function checkEligibility(age, status) {
  if (age <= 18) {
    console.log("Person is not eligible");
  }
  if (age > 18 && status) {
    console.log("The person is Eligible");
  } else if (age > 18 && !status) {
    console.log("The person is Conditionally  Eligible");
  }
}
checkEligibility(age, isEmployed);

console.log("Module 4: Lab_1 - Task_4");
const refactInputString = prompt(
  "Enter Price, Quantity, Discount and TaxRate in the same order separated by commas:"
);
const refactInputArray = refactInputString.split(",");
console.log(refactInputArray);

function refactorCalculateTotalCost(refactInputArray) {
  let price = Number(refactInputArray[0]);
  console.log("price:", price);
  let quantity = Number(refactInputArray[1]);
  console.log("Quantity:", quantity);
  let discount = Number(refactInputArray[2]);
  console.log("Discount:", discount);
  let taxRate = Number(refactInputArray[3]);
  console.log("Tax Rate:", taxRate);

  if (isNaN(price) || isNaN(quantity) || isNaN(discount) || isNaN(taxRate)) {
    console.log("Invalid input");
  } else if (discount === 0) {
    totalCost = price * quantity * (1 + taxRate);
    // totalCost = ((price - discount) * quantity) * (1 + taxRate)
    return totalCost;
  } else {
    totalCost = (price - discount) * quantity * (1 + taxRate);
    return totalCost;
  }
}
console.log(refactorCalculateTotalCost(refactInputArray));

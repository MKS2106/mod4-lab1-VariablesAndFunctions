// This is the code for Module 4 - Lab1 (Variables and Funtions)

// Code for Task 1
console.log("Module 4: Lab_1 - Task_1");
// Prompting user to enter First and Last Name
let firstName = prompt("Please enter your first name");
let lastName = prompt("Please enter your Last name");
//Capitalize the first letter
function capitaliseName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
// This function returns the entered name in "LastName Firstname format"
function formatFullName(firstName, lastName) {
  if (firstName === "" || lastName === "") {
    return "Invalid Name Input";
  } else {
    let capitalisedLname = capitaliseName(lastName);
    let capitalisedFname = capitaliseName(firstName);
    return capitalisedLname + " " + capitalisedFname;
  }
}
// calling the funtion to display the name is desired format
console.log(formatFullName(firstName, lastName));
///////////////////////////////////////////////////////////////////////////////////////////

// Code for Task 2
console.log("Module 4: Lab_1 - Task_2");
// prompting user to enter the Input
const inputString = prompt(
  "Enter price, quantity and taxRate in the same order separated by commas:"
);
const inputArray = inputString.split(","); //distingushing paramters separated by ,
// console.log(inputArray);
// This function returns the total cost based on the user input
function calculateTotalCost(inputArray) {
  let price = Number(inputArray[0]);
  console.log("price:", price);
  let quantity = Number(inputArray[1]);
  console.log("Quantity:", quantity);
  let taxRate = Number(inputArray[2]);
  console.log("Tax Rate:", taxRate);
// Checking if any of the parameters are non-string
  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
    console.log("Invalid input");
  } else {
    totalCost = price * quantity * (1 + taxRate);
    return totalCost;
  }
}
// Callign the funtion to display the result
console.log(calculateTotalCost(inputArray));
/////////////////////////////////////////////////////////////////////////////////////////
// Code for Task-3 
console.log("Module 4: Lab_1 - Task_3");
// Prompting user to enter the inputs
let age = prompt("Enter person's age:");
let stringValue = prompt(
  "Please enter 'yes' if the person is employed, if not please enter 'no' "
);
let isEmployed = convertYesToTrue(stringValue); 
 //convert the string input to boolen values
function convertYesToTrue(value) {
   return value.toLowerCase() === "yes";
}

//Funtion to check the eligibility based on the entered input
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
checkEligibility(age, isEmployed);//invoking the function to check the eligibillity
////////////////////////////////////////////////////////////////////////////////////////////
//Code for Lab1-Task4
console.log("Module 4: Lab_1 - Task_4");
// Prompting user to enter First and Last Name
const refactInputString = prompt(
  "Enter Price, Quantity, Discount and TaxRate in the same order separated by commas:"
);
const refactInputArray = refactInputString.split(",");
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
        return totalCost;
  } else {
    totalCost = (price - discount) * quantity * (1 + taxRate);
    return totalCost;
  }
}
console.log(refactorCalculateTotalCost(refactInputArray));

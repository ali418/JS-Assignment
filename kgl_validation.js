// File: kgl_validation.js
// Purpose: Coursework 1 – KGL Data Validation System
// Sections: Variables & types, String cleaning/validation, Business rules, Arrays

// Variable declarations
// 1. Declare the following variables using appropriate keywords ( let or const ):
const companyName = "Karibu Groceries LTD";
const minimumTonnage = 1000;
const isOperational = true;
let managerName;
const closedBranches = null;

// 3. Write comments (single-line and multiline) explaining why you chose let or const for each variable.
/* 
   Multiline Comment Explanation:
   - 'const' is used for variables that should not be reassigned (companyName, minimumTonnage, isOperational, closedBranches).
   - 'let' is used for variables that might be assigned a value later (managerName).
*/
// Single-line: companyName is constant because the company name doesn't change.
// Single-line: minimumTonnage is a fixed business rule.
// Single-line: managerName is let because it is currently undefined and will be set later.

function logVariableTypes() {
  // 2. Use the typeof operator to check and log the data type of each variable.
  console.log("Type of companyName:", typeof companyName);
  console.log("Type of minimumTonnage:", typeof minimumTonnage);
  console.log("Type of isOperational:", typeof isOperational);
  console.log("Type of managerName:", typeof managerName);
  console.log("Type of closedBranches:", typeof closedBranches);
}

function toTitleCase(name) {
  // 5. ... Converts the cleaned name to proper title case
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function validateDealerName() {
  // 4. Declare a variable dealerNameInput with the value " james BOND "
  const dealerNameInput = " james BOND ";
  
  // 5. ... Removes the leading and trailing whitespace
  const cleanedDealerNameInput = dealerNameInput.trim();
  const cleanDealerName = toTitleCase(cleanedDealerNameInput); // Stores the result in a new variable cleanDealerName
  
  // Logs the result using a template literal
  console.log(`Cleaned Dealer Name: ${cleanDealerName}`);
  
  // 6. Write a validation check...
  const isValid = cleanDealerName.length >= 2 && cleanDealerName.trim() !== "";
  console.log(isValid ? "Valid dealer name" : "Invalid dealer name");
}

function applyBusinessRules() {
  // 7. Create variables for a procurement record:
  let userRole = 'Sales Agent'; 
  let procurementTonnage = 1500;
  let produceType = 'Beans'; 
  let costInUgx = '50000'; 

  // 8. Implement the following KGL business rules...
  // Rule 1: No sales agent is allowed to record any produce entry.
  if (userRole === "Sales Agent") {
    console.log("Error: Sales Agent cannot record produce entries");
    // do NOT proceed with the other checks
    return;
  }

  // Rule 2: For individual dealers, tonnage must be not less than 1000kg.
  const tonnageValid = procurementTonnage >= 1000;
  
  // Rule 3: The cost must be not less than 5 digits.
  const costNumber = Number(costInUgx);
  const costValid = costNumber >= 10000;
  
  console.log(tonnageValid ? "Tonnage meets minimum" : "Tonnage below minimum");
  console.log(costValid ? "Cost meets minimum" : "Cost below minimum");
  
  // 9. Use the logical AND ( && ) operator...
  const procurementRecordValid = tonnageValid && costValid;
  console.log(
    procurementRecordValid ? "Procurement record valid" : "Procurement record invalid"
  );
}

function manageProduce() {
  // 10. Create an array named kglProduce...
  const kglProduce = ["Beans", "Grain Maize", "Cow peas", "G-nuts", "Soybeans"];
  
  // 11. Write code that:
  kglProduce.push("Green Peas"); // Adds a new produce type "Green Peas" to the end
  kglProduce.shift(); // Removes the first item
  const hasGnuts = kglProduce.includes("G-nuts"); // Checks if "G-nuts" exists
  console.log("Contains G-nuts:", hasGnuts);
  console.log("Final produce list:", kglProduce); // Logs the final array
  console.log("Final produce count:", kglProduce.length); // and its length

  // 12. Create a second array branch2Produce...
  const branch2Produce = ["Maize", "Beans"];
  // Use the .concat() method...
  const allProduce = kglProduce.concat(branch2Produce);
  console.log("All produce merged:", allProduce);
}

function main() {
  logVariableTypes();
  validateDealerName();
  applyBusinessRules();
  manageProduce();
}

main();


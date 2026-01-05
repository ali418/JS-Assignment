// File: kgl_functions.js
// Purpose: Coursework 2 – KGL Inventory Processing System
// Sections: Functions, Objects, Loops, Date

/**
 * Calculate total procurement cost.
 * Returns "Invalid input" for non-numeric or negative values.
 */
function calculateProcurementCost(tonnageInKg, pricePerKg) {
  if (typeof tonnageInKg !== "number" || typeof pricePerKg !== "number") {
    return "Invalid input";
  }
  if (Number.isNaN(tonnageInKg) || Number.isNaN(pricePerKg)) {
    return "Invalid input";
  }
  if (tonnageInKg < 0 || pricePerKg < 0) {
    return "Invalid input";
  }
  return tonnageInKg * pricePerKg;
}

/**
 * Validate buyer name is non-empty and at least 2 chars (after trim).
 */
const validateBuyerName = (buyerName) => {
  const s = String(buyerName ?? "").trim();
  return s.length >= 2 && s !== "";
};

/**
 * Map user role to authorization scope.
 */
function checkUserAuthorization(role) {
  switch (role) {
    case "Manager":
      return "procurement_and_sales";
    case "Sales Agent":
      return "sales_only";
    case "Director":
      return "view_aggregations";
    default:
      return "unauthorized";
  }
}

/**
 * Create a sales record object with generated id and current date.
 */
function createSalesRecord(produceName, tonnage, buyerName, amountPaid) {
  return {
    id: Math.floor(Math.random() * 9000) + 1000,
    produceName,
    tonnageInKgs: tonnage,
    buyerName,
    amountPaid,
    saleDate: new Date(),
    isCreditSale: false,
  };
}

function runDemo() {
  const testRecord = createSalesRecord("Beans", 1200, "John Doe", 6600000);
  testRecord.branch = "Maganjo";
  testRecord.isCreditSale = true;
  testRecord["dueDate"] = new Date();
  console.log("Sales record keys:", Object.keys(testRecord));

  for (const key in testRecord) {
    console.log(`Property: ${key}, Value: ${testRecord[key]}`);
  }

  // 7. Create an array of daily procurement tonnages for a week:
  let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300]; 
  // Write code using a traditional for loop that:
  let totalWeeklyTonnage = 0;
  for (let i = 0; i < weeklyTonnage.length; i++) {
    totalWeeklyTonnage += weeklyTonnage[i]; // Calculates the total tonnage
  }
  const averageDailyTonnage = totalWeeklyTonnage / weeklyTonnage.length; // Calculates the average daily tonnage
  console.log(`Weekly total tonnage: ${totalWeeklyTonnage}`); // Logs both results
  console.log(`Average daily tonnage: ${averageDailyTonnage}`);

  // 8. Create an array of sales records...
  const salesRecords = [
    createSalesRecord("Beans", 1200, "Alice", 7000000),
    createSalesRecord("Maize", 900, "Bob", 3000000),
    createSalesRecord("G-nuts", 1500, "Carol", 10800000),
    createSalesRecord("Soybeans", 800, "Dan", 4640000),
    createSalesRecord("Cow peas", 1100, "Eve", 6600000),
  ];
  salesRecords[1].isCreditSale = true;
  salesRecords[3].isCreditSale = true;
  
  // Write code using a for...of loop that:
  let creditSalesCount = 0;
  for (const record of salesRecords) {
    if (!record.isCreditSale) continue; // Uses the continue statement to skip non-credit sales
    creditSalesCount++; // Counts how many credit sales exist
  }
  console.log(`Total credit sales: ${creditSalesCount}`);

  // 9. Simulate a stock check: Create an inventory array:
  let inventory = [ 
    { name: "Beans", tonnage: 500 },
    { name: "Maize", tonnage: 0 },
    { name: "G-nuts", tonnage: 300 },
  ];
  // Use a for loop with a break statement to:
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].tonnage === 0) { // Search for the first item with tonnage === 0
      console.log(`Manager Alert: ${inventory[i].name} is out of stock`); // When found, log "Manager Alert..."
      break; // and exit the loop immediately
    }
  }

  console.log("Validation examples:", {
    costExample: calculateProcurementCost(1000, 5500),
    invalidCost: calculateProcurementCost(-1, 5500),
    buyerNameValid: validateBuyerName("Alice"),
    buyerNameInvalid: validateBuyerName(" "),
    authManager: checkUserAuthorization("Manager"),
    authAgent: checkUserAuthorization("Sales Agent"),
    authUnknown: checkUserAuthorization("Guest"),
  });
}

runDemo();

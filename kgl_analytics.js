// File: kgl_analytics.js
// Purpose: Coursework 3 – KGL Analytics and Reporting System
// Sections: Records, Higher-order functions, Sets, Maps

/**
 * Sample procurement records used for analytics examples.
 */
const procurementRecords = [
  { id: 1010, dealerName: "Alice", produceType: "Beans", tonnageInKgs: 1200, costInUgx: 6600000, procurementDate: new Date("2025-12-01") },
  { id: 1011, dealerName: "Bob", produceType: "Grain Maize", tonnageInKgs: 950, costInUgx: 4560000, procurementDate: new Date("2025-12-02") },
  { id: 1012, dealerName: "Carol", produceType: "Soybeans", tonnageInKgs: 1500, costInUgx: 8700000, procurementDate: new Date("2025-12-03") },
  { id: 1013, dealerName: "Dan", produceType: "Cow peas", tonnageInKgs: 800, costInUgx: 4800000, procurementDate: new Date("2025-12-04") },
  { id: 1014, dealerName: "Eve", produceType: "G-nuts", tonnageInKgs: 1100, costInUgx: 7920000, procurementDate: new Date("2025-12-05") },
  { id: 1015, dealerName: "Frank", produceType: "Beans", tonnageInKgs: 2000, costInUgx: 12000000, procurementDate: new Date("2025-12-06") },
];

/**
 * Compute cost per kg for each record.
 */
const recordsWithCostPerKg = procurementRecords.map((r) => ({
  ...r,
  costPerKg: r.costInUgx / r.tonnageInKgs,
}));

/**
 * Filter records meeting minimum individual dealer requirement.
 */
const filteredByTonnage = recordsWithCostPerKg.filter((r) => r.tonnageInKgs >= 1000);

/**
 * Aggregate totals using reduce.
 */
const totalTonnage = procurementRecords.reduce((sum, r) => sum + r.tonnageInKgs, 0);
const totalCost = procurementRecords.reduce((sum, r) => sum + r.costInUgx, 0);

/**
 * Get unique dealer names from records.
 */
function getUniqueDealers(records) {
  return Array.from(new Set(records.map((r) => r.dealerName)));
}

const authorizedRoles = new Set(["Manager", "Director"]);
/**
 * Check if role is authorized for procurement.
 */
function isAuthorizedForProcurement(userRole) {
  return authorizedRoles.has(userRole);
}

/**
 * KGL price list map: produce -> UgX per kg.
 */
const kglPriceList = new Map([
  ["Beans", 5500],
  ["Grain Maize", 4800],
  ["Cow peas", 6000],
  ["G-nuts", 7200],
  ["Soybeans", 5800],
]);

/**
 * Calculate sale total for a produce and tonnage; returns message if missing price.
 */
function calculateSaleTotal(produceName, tonnageInKgs) {
  const price = kglPriceList.get(produceName);
  if (price === undefined) return "Price not found";
  return price * tonnageInKgs;
}

function runAnalyticsDemo() {
  console.log("Records with costPerKg:", recordsWithCostPerKg);
  console.log("Filtered records (tonnage >= 1000):", filteredByTonnage);
  console.log("Filtered count:", filteredByTonnage.length);
  console.log(`Total tonnage: ${totalTonnage} kg`);
  console.log(`Total cost: ${totalCost} UgX`);
  console.log("Unique dealers:", getUniqueDealers(procurementRecords));
  console.log("Authorization tests:", {
    Manager: isAuthorizedForProcurement("Manager"),
    Director: isAuthorizedForProcurement("Director"),
    Agent: isAuthorizedForProcurement("Sales Agent"),
  });
  console.log("Sale totals:", {
    Beans: calculateSaleTotal("Beans", 1000),
    Maize: calculateSaleTotal("Grain Maize", 750),
    Unknown: calculateSaleTotal("Cassava", 500),
  });
  for (const [name, price] of kglPriceList.entries()) {
    console.log(`Produce: ${name}, Price per Kg: ${price} UgX`);
  }
  const highestPrice = Array.from(kglPriceList.values()).reduce(
    (max, p) => (p > max ? p : max),
    -Infinity
  );
  console.log(`Highest price: ${highestPrice} UgX`);
}

runAnalyticsDemo();

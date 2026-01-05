# JS Assignment – KGL Systems

This repository contains three JavaScript scripts implementing the coursework defined in `str.txt`:

- `kgl_validation.js` – KGL Data Validation System
- `kgl_functions.js` – KGL Inventory Processing System
- `kgl_analytics.js` – KGL Analytics and Reporting System

## Prerequisites
- Node.js installed (v16+ recommended)

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/ali418/JS-Assignment.git
   cd JS-Assignment
   ```
2. Run each script:
   ```bash
   node kgl_validation.js
   node kgl_functions.js
   node kgl_analytics.js
   ```

## Scripts Overview
- `kgl_validation.js`
  - Declares variables with appropriate `let`/`const` and logs types using `typeof`.
  - Cleans and validates dealer name input and prints results.
  - Applies KGL business rules for role, tonnage, and cost; logs validity.
  - Manages arrays for produce and merges branch inventories.

- `kgl_functions.js`
  - `calculateProcurementCost(tonnageInKg, pricePerKg)` validates inputs and computes total cost.
  - `validateBuyerName(name)` returns a boolean for name validity.
  - `checkUserAuthorization(role)` maps roles via `switch`.
  - `createSalesRecord(...)` returns a sales record object with generated ID and date.
  - Demonstrates weekly tonnage totals/average, counts credit sales, and performs inventory stock alerts.

- `kgl_analytics.js`
  - Builds sample procurement records with `Date` objects.
  - Uses `.map/.filter/.reduce` for analytics: `costPerKg`, filtering by tonnage, and totals.
  - Uses `Set` to get unique dealers and check authorization.
  - Uses `Map` for price list and computes sale totals.
  - Iterates price entries and logs the highest price.

## Notes
- Scripts are self-contained and do not require external packages.
- Outputs are printed to the console for quick verification.

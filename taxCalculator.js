// Tax Calculator Logic

function calculateTax(income, filingStatus) {
  if (income < 0) {
    throw new Error("Income cannot be negative");
  }

  let tax = 0;

  if (filingStatus === "single") {
    if (income <= 10275) {
      tax = income * 0.10;
    } else if (income <= 41775) {
      tax = 1027.50 + (income - 10275) * 0.12;
    } else if (income <= 89075) {
      tax = 4807.50 + (income - 41775) * 0.22;
    } else if (income <= 170050) {
      tax = 15213.50 + (income - 89075) * 0.24;
    } else if (income <= 215950) {
      tax = 34647.50 + (income - 170050) * 0.32;
    } else if (income <= 539900) {
      tax = 49335.50 + (income - 215950) * 0.35;
    } else {
      tax = 162718.00 + (income - 539900) * 0.37;
    }
  } else if (filingStatus === "married") {
    if (income <= 20550) {
      tax = income * 0.10;
    } else if (income <= 83550) {
      tax = 2055.00 + (income - 20550) * 0.12;
    } else if (income <= 178150) {
      tax = 9615.00 + (income - 83550) * 0.22;
    } else if (income <= 340100) {
      tax = 30427.00 + (income - 178150) * 0.24;
    } else if (income <= 431900) {
      tax = 69295.00 + (income - 340100) * 0.32;
    } else if (income <= 647850) {
      tax = 98671.00 + (income - 431900) * 0.35;
    } else {
      tax = 174253.50 + (income - 647850) * 0.37;
    }
  } else {
    throw new Error("Invalid filing status");
  }

  return Math.round(tax * 100) / 100;
}

function getEffectiveTaxRate(income, filingStatus) {
  if (income <= 0) return 0;
  const tax = calculateTax(income, filingStatus);
  return Math.round((tax / income) * 10000) / 100;
}

function getAfterTaxIncome(income, filingStatus) {
  const tax = calculateTax(income, filingStatus);
  return Math.round((income - tax) * 100) / 100;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calculateTax, getEffectiveTaxRate, getAfterTaxIncome };
}

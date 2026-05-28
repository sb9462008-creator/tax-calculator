const { calculateTax, getEffectiveTaxRate, getAfterTaxIncome } = require("../taxCalculator");

describe("Tax Calculator", function () {

  it("should calculate 10% tax for income in the lowest bracket (single)", function () {
    const tax = calculateTax(5000, "single");
    expect(tax).toBe(500);
  });

  it("should calculate correct tax for income in the 12% bracket (single)", function () {
    const tax = calculateTax(20000, "single");
    // 1027.50 + (20000 - 10275) * 0.12 = 1027.50 + 1167 = 2194.50
    expect(tax).toBeCloseTo(2194.50, 1);
  });

  it("should calculate correct tax for income in the 22% bracket (single)", function () {
    const tax = calculateTax(50000, "single");
    // 4807.50 + (50000 - 41775) * 0.22 = 4807.50 + 1809.50 = 6617.00
    expect(tax).toBeCloseTo(6617.00, 1);
  });

  it("should calculate 10% tax for income in the lowest bracket (married)", function () {
    const tax = calculateTax(10000, "married");
    expect(tax).toBe(1000);
  });

  it("should return 0 effective tax rate for zero income", function () {
    const rate = getEffectiveTaxRate(0, "single");
    expect(rate).toBe(0);
  });

  it("should throw error for negative income", function () {
    expect(function () {
      calculateTax(-1000, "single");
    }).toThrowError("Income cannot be negative");
  });

  it("should throw error for invalid filing status", function () {
    expect(function () {
      calculateTax(50000, "invalid");
    }).toThrowError("Invalid filing status");
  });

});

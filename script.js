function formatCurrency(amount) {
  return "$" + amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function calculate() {
  const incomeInput = document.getElementById("income").value;
  const filingStatus = document.getElementById("filingStatus").value;
  const resultDiv = document.getElementById("result");

  if (!incomeInput || isNaN(incomeInput) || Number(incomeInput) < 0) {
    alert("Please enter a valid income amount.");
    return;
  }

  const income = parseFloat(incomeInput);

  try {
    const tax = calculateTax(income, filingStatus);
    const rate = getEffectiveTaxRate(income, filingStatus);
    const afterTax = getAfterTaxIncome(income, filingStatus);

    document.getElementById("grossIncome").textContent = formatCurrency(income);
    document.getElementById("taxAmount").textContent = formatCurrency(tax);
    document.getElementById("taxRate").textContent = rate + "%";
    document.getElementById("afterTax").textContent = formatCurrency(afterTax);

    resultDiv.classList.remove("hidden");
  } catch (e) {
    alert("Error: " + e.message);
  }
}

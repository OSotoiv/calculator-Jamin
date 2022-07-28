window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  const values = {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
  if (!values.amount || !values.years || !values.rate) {
    throw new Error('Invalid income');
  }
  return values;
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment 
function setupIntialValues() {
  document.getElementById("loan-amount").value = 200000;
  document.getElementById("loan-years").value = 30;
  document.getElementById("loan-rate").value = 5.672;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues()
  if (currentValues) {
    const payment = calculateMonthlyPayment(currentValues);
    updateMonthly(payment);
  };
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = (values.rate / 100) / 12;
  const n = values.years * 12;
  const monthlyPayment = (p * i) / (1 - ((1 + i) ** -n));
  console.log(monthlyPayment)
  return monthlyPayment.toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
}

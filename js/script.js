// get value from input
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputFieldValue;
}

function totalRemainingBalance() {
  return remainingBalance;
}

// set value
function setValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// calculate total expenses button
document
  .getElementById("btn-total-expenses")
  .addEventListener("click", function () {
    const foodValue = getInputValue("food");
    const rentValue = getInputValue("rent");
    const clothesValue = getInputValue("clothes");
    // total expenses in a month
    const totalExpenses = (foodValue + rentValue + clothesValue).toFixed(2);
    setValue("total-expenses", totalExpenses);

    // total income
    const income = getInputValue("income");
    // calculate remaining balance
    const remainingBalance = (income - totalExpenses).toFixed(2);
    // set remaining balance
    setValue("balance", remainingBalance);
  });

// total savings
document.getElementById("btn-save").addEventListener("click", function () {
  const percentageOfSave = getInputValue("save");
  const remainingBalanceField = document.getElementById("balance");
  const remainingBalance = parseFloat(remainingBalanceField.innerText);
  //   total save
  const totalSave = ((remainingBalance / 100) * percentageOfSave).toFixed(2);

  //   set value
  setValue("total-save", totalSave);

  //   calculate remaining total balance;
  const totalBalance = (remainingBalance - totalSave).toFixed(2);
  // set value
  setValue("remaining-total", totalBalance);
});

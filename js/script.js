const expensesError = document.getElementById("expenses-error");
const balanceError = document.getElementById("balance-error");

// error message
function error(message = "", isShowMsg) {
  const errorMessages = document.getElementsByClassName("error-message");
  for (const errorMessage of errorMessages) {
    errorMessage.style.fontSize = "14px";
    errorMessage.style.color = "red";
    errorMessage.style.marginTop = "1rem";
    errorMessage.innerText = message;
    if (isShowMsg) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  }
}

// get value from input
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputFieldValue;
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
    // total income
    const income = getInputValue("income");
    // calculate remaining balance
    const remainingBalance = (income - totalExpenses).toFixed(2);
    // conditions
    if (isNaN(totalExpenses) || totalExpenses < 0) {
      const text = "Please, give a valid number.";
      error(text, true);
    } else if (isNaN(remainingBalance)) {
      const text = "Please, give a valid number.";
      error(text, true);
    } else if (remainingBalance < 0) {
      const text = "Your expenses is to high.";
      error(text, true);
    } else {
      setValue("total-expenses", totalExpenses);
      // set remaining balance
      setValue("balance", remainingBalance);
      error(false);
    }

    // error
    balanceError.style.display = "none";
  });

// total savings
document.getElementById("btn-save").addEventListener("click", function () {
  const percentageOfSave = getInputValue("save");
  const remainingBalanceField = document.getElementById("balance");
  const remainingBalance = parseFloat(remainingBalanceField.innerText);
  //   total save
  const totalSave = ((remainingBalance / 100) * percentageOfSave).toFixed(2);
  //   calculate remaining total balance;
  const totalBalance = (remainingBalance - totalSave).toFixed(2);

  // conditions
  if (percentageOfSave > 100) {
    const text = `You can't save more than your remaining balance!`;
    error(text, true);
  } else if (isNaN(totalSave)) {
    const text = "Please, give a valid number.";
    error(text, true);
  } else {
    //   set value
    setValue("total-save", totalSave);
    // set value
    setValue("remaining-total", totalBalance);
    error(false);
  }
  if (expensesError.innerText === "false") {
    balanceError.innerText = `Please, fill the previous inputs.`;
    balanceError.style.display = `block`;
  }
});

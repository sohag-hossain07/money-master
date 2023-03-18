// error message
const errorMessage = document.getElementById("error-message");
errorMessage.style.fontSize = "14px";
errorMessage.style.color = "red";
errorMessage.style.marginTop = "1rem";

// error message
const errorMessage2 = document.getElementById("error-message2");
errorMessage2.style.fontSize = "14px";
errorMessage2.style.color = "red";
errorMessage2.style.marginTop = "1rem";

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
      errorMessage.innerText = `Please, give a valid number.`;
      errorMessage.style.display = "block";
    } else if (isNaN(remainingBalance)) {
      errorMessage.innerText = `Please, give a valid number.`;
      errorMessage.style.display = "block";
    } else if (remainingBalance < 0) {
      errorMessage.innerText = `Your expenses is to high`;
      errorMessage.style.display = "block";
    } else {
      setValue("total-expenses", totalExpenses);
      // set remaining balance
      setValue("balance", remainingBalance);
      errorMessage.style.display = "none";
    }
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
  if (percentageOfSave > 100 || isNaN(totalSave)) {
    errorMessage2.innerText = `Please, give a valid number.`;
    errorMessage2.style.display = "block";
  } else {
    //   set value
    setValue("total-save", totalSave);
    // set value
    setValue("remaining-total", totalBalance);
    errorMessage2.style.display = "none";
  }
});

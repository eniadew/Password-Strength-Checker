const prompt = require("prompt-sync")();

function containsUpperCase(str) {
  return Boolean(str.match(/[A-Z]/));
}

function checkLength(str) {
  return Boolean(str.length >= 8);
}

function containsNumbers(str) {
  return Boolean(str.match(/[0-9]/));
}

function containsSymbols(str) {
  return Boolean(
    str.match(
      /[!, @, #, $, %, ^, &, *, (, ), -, _, +, =, {, }, |, \, :, ;, ", ', <, ,, >, /, ?, ~,]/,
    ),
  );
}

function passwordChecker() {
  console.log("Password Strength Checker");
  const password = prompt("Enter a password: ");
  if (
    containsUpperCase(password) &&
    containsNumbers(password) &&
    containsSymbols(password) &&
    checkLength(password)
  ) {
    console.log("Good Password!");
  } else {
    console.log("Error! Bad Password!");
    if (containsUpperCase(password) === false) {
      console.log("Please add an uppercase letter");
    }
    if (containsNumbers(password) === false) {
      console.log("Please add a number");
    }
    if (containsSymbols(password) === false) {
      console.log("Please add a symbol");
    }
    if (checkLength(password) === false) {
      console.log("Password must be more than 8 characters");
    }
  }
}

passwordChecker();

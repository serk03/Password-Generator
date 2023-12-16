// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var finalCharPool = [];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("How long would you like your password?");
  var passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength >= 128) {
    alert("Make sure the pw is between 8 and 128 chars");
    return;
  }

  var isSpecialChar = confirm(
    "Would you like special characters in password?\nOk:(Yes)/ Cancel:(No)"
  );
  var isNumChar = confirm(
    "Would you like numerical characters in password?\nOk:(Yes)/ Cancel:(No)"
  );
  var isUpperCasedChar = confirm(
    "Would you like UpperCase characters in password?\nOk:(Yes)/ Cancel:(No)"
  );
  var isLowerCasedChar = confirm(
    "Would you like LowerCase characters in password?\nOk:(Yes)/ Cancel:(No)"
  );

  var passwordInfo = {
    passwordLength,
    isSpecialChar,
    isNumChar,
    isUpperCasedChar,
    isLowerCasedChar,
  };

  return passwordInfo;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var passwordInfo = getPasswordOptions();

  if (passwordInfo.isSpecialChar) {
    finalCharPool.push.apply(finalCharPool, specialCharacters);
  }

  if (passwordInfo.isNumChar) {
    finalCharPool.push.apply(finalCharPool, numericCharacters);
  }

  if (passwordInfo.isUpperCasedChar) {
    finalCharPool.push.apply(finalCharPool, upperCasedCharacters);
  }

  if (passwordInfo.isLowerCasedChar) {
    finalCharPool.push.apply(finalCharPool, lowerCasedCharacters);
  }

  for (let i = 0; i < passwordInfo.passwordLength; i++) {
    var randomChar = getRandom(finalCharPool);
    console.log(randomChar);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//---------------------------------------------------------
// getPasswordOptions();
// getRandom();

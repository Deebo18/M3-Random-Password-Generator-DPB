// Assignment code here
var alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaUpper = [];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

for (var i = 0; i < alphaLower.length; i++) {
  alphaUpper[i] = alphaLower[i].toUpperCase()
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function created in order to prompt user of options before generating password.

function questions() {
  var isValid = false;
  do {
    var length = window.prompt("Please choose a password between 8 and 128 character.")
    
    if((length < 8)||(length > 128)) {
    alert("Please choose a number between 8 and 128");
    return
  }
  
    var includeLowerCase = window.confirm("Do you want your password to include lowercase characters?")
    var includeUpperCase = window.confirm("Do you want your password to include uppercase characters?")
    var includeNumbers = window.confirm("Do you want your password to include numbers?")
    var includeSpecial = window.confirm("Do you want your password to include special characters?")
    var responses = {
      length: length,
      includeLowerCase: includeLowerCase,
      includeUpperCase: includeUpperCase,
      includeNumbers: includeNumbers,
      includeSpecial: includeSpecial,
    }

   if((!includeLowerCase)&&(!includeUpperCase)&&(!includeNumbers)&&(!includeSpecial))
    alert("Please choose at least one type.")
    else
    isValid = true;
  } while(!isValid);
  return responses;
}

// Function to take user's inputs and generates a desired password based on criteria.

function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.includeLowerCase) {
    for (var i of alphaLower)
      possibleCombo.push(i);
  }
  if (passwordOptions.includeUpperCase) {
    for (var i of alphaUpper)
      possibleCombo.push(i);
  }
  if (passwordOptions.includeNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.includeSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }
  console.log(possibleCombo);

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var lowercaseInput = "";
var uppercaseInput = "";
var numbersInput = "";
var specCharInput = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Password Generation Code
function generatePassword() {
  var pwCharSet = "";
  var password = "";
  var lengthInput = "";

  // Password length
  do {
    lengthInput = prompt("Please enter the length of the password (min 8 and max 128)");
  } while (lengthInput === null || lengthInput > 128 || lengthInput < 8);
  
  // Number of lowercase characters
  lowercaseInput = confirm("Do you want to include lowercase characters?");
  if (lowercaseInput === true) {
    pwCharSet += lowercase;
  }
  
  // Number of uppercase characters
  uppercaseInput = confirm("Do you want to include uppercase characters");
  if (uppercaseInput === true) {
    pwCharSet += uppercase;
  }

  // Number of numeric characters
  numbersInput = confirm("Do you want to include numeric characters?");
  if (numbersInput === true) {
    pwCharSet += numbers;
  }
  
  // Number of special characters
  specCharInput = confirm("Do you want to include special characters?");
  if (specCharInput === true) {
    pwCharSet += specChar;
  }

  // Call checkValidity function
  checkValidity();

  // Loop to generate random password
  for (var i = 0; i < lengthInput; i++) {
    password += pwCharSet.charAt(
      Math.floor(Math.random() * pwCharSet.length)
    );
  }
  return password;
}

// Character type input validity check
function checkValidity() {
  if (lowercaseInput === false && uppercaseInput === false && numbersInput === false && specCharInput === false) {
    alert("You have to select at least one character type. Please click the 'Generate Password' button again.");
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


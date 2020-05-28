// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  password.value = passwordText;

  // Password length
  var lengthInput = prompt("Please enter the length of the password (min 8 and max 128)");

  if (lengthInput === 0 || lengthInput > 128 || lengthInput < 8) {
    alert("Password length should be between 8 and 128 characters!");
    var lengthInput = prompt("Please enter the length of the password (min 8 and max 128).");
  }
  
  // Number of lowercase characters
  var lowercaseInput = prompt("Please enter the number of lowercase letters.");
  password += lowercase;

  if (lowercaseInput === 0 || lowercaseInput > lengthInput) {
    alert("Please enter at least 1 and no more than " + lengthInput);
    var lowercaseInput = prompt("Please enter the number of lowercase letters.");
    password += lowercase;
  }
  
  // Number of uppercase characters
  var uppercaseInput = prompt("Please enter the number of uppercase letters.");
  password += uppercase;

  if (uppercaseInput === 0 || (uppercaseInput + lowercaseInput) > lengthInput) {
    alert("Please enter at least 1 and no more than " + (lengthInput - lowercaseInput));
    var uppercaseInput = prompt("Please enter the number of uppercase letters.");
    password += uppercase;
  }

  // Number of numeric characters
  var numbersInput = prompt("Please enter the number of numeric characters.");
  password += numbers;

  if (numbersInput === 0 || (numbersInput + lowercaseInput + uppercaseInput) > lengthInput) {
    alert("Please enter at least 1 and no more than " + (lengthInput - (lowercaseInput + uppercaseInput)));
    var numbersInput = prompt("Do you want to include numbers?");
    password += numbers;
  }

  // Number of special characters
  var specCharInput = prompt("Please enter the number of special characters.");
  password += specChar;
  
  if (specCharInput === 0 || (specCharInput + lowercaseInput + uppercaseInput + numbersInput) > lengthInput) {
    alert("Please enter at least 1 and no more than " + (lengthInput - (lowercaseInput + uppercaseInput + numbersInput)));
    var specCharInput = prompt("Please enter the number of special characters.");
    password += specChar;
  }

  
  // Loop to generate a random password
  for (var i = 0; i < lengthInput; i++) {
    passwordText += password.charAt(
      Math.floor(Math.random() * password.length)
    );
  }
  // return password;
  console.log(passwordText);
 
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

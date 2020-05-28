// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

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
  var lowercaseInput = confirm("Do you want to include lowercase characters?");
  if (lowercaseInput === true) {
    pwCharSet += lowercase;
  }
  
  // Number of uppercase characters
  var uppercaseInput = confirm("Do you want to include uppercase characters");
  if (uppercaseInput === true) {
    pwCharSet += uppercase;
  }

  // Number of numeric characters
  var numbersInput = confirm("Do you want to include numeric characters?");
  if (numbersInput === true) {
    pwCharSet += numbers;
  }
  
  // Number of special characters
  var specCharInput = confirm("Do you want to include special characters?");
  if (specCharInput === true) {
    pwCharSet += specChar;
  }
  
  // Loop to generate a random password
  var randomIndex = Math.floor(Math.random() * pwCharSet.length);

  for (var i = 0; i < lengthInput; i++) {
    password += pwCharSet.charAt(randomIndex);
  }
  return password;

}

// Calling checkValidity function
// var result = password.checkValidity();

// Checking validity
// function checkValidity (password) {
//   if (password == null) {
//     alert("You have to select at least one character type. Let's do this again!");
//     generatePassword();
//   }
// }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 
// function clean(){
//   document.getElementById("#password").innerHTML='';
// }

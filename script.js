// Assignment code here

// Arrays for prompts
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "?", "%", "&", ",", "*", "+", "-", "."];

// Declare variables
var lengthConfirm = "";
var lowerConfirm;
var upperConfirm;
var numberConfirm;
var specialConfirm;

// Password generation functions
function generatePassword() {
  // Character amount confirmation
  var lengthConfirm = (prompt("Please let us know how many characters you would like your password to contain (between 8-128)"));
    while(lengthConfirm <=7 || lengthConfirm >=129) {
    alert("Password length MUST be between 8-128 characters")
    var lengthConfirm = (prompt("Please let us know how many characters you would like your password to contain (between 8-128)"));
  }
  // Character Confirmations
  var lowerConfirm = confirm("Click OK if you would like your password to contain lowercase letters, otherwise click cancel");
  var upperConfirm = confirm("Click OK if you would like your password to contain uppercase letters, otherwise click cancel");
  var numberConfirm = confirm("Click OK if you would like your password to contain numbers, otherwise click cancel")
  var specialConfirm = confirm("Click OK if you would like your password to contain special characters, otherwise click cancel")
  // while loop to make sure the user selects at least one parameter
    while( lowerConfirm === false && upperConfirm === false && numberConfirm === false && specialConfirm === false) {
      alert("You MUST select at least one paramenter for your password");
      var lowerConfirm = confirm("Click OK if you would like your password to contain lowercase letters, otherwise click cancel");
      var upperConfirm = confirm("Click OK if you would like your password to contain uppercase letters, otherwise click cancel");
      var numberConfirm = confirm("Click OK if you would like your password to contain numbers, otherwise click cancel")
      var specialConfirm = confirm("Click OK if you would like your password to contain special characters, otherwise click cancel")
    }
  var passwordCharacters = []
  if (lowerConfirm) {
    passwordCharacters = passwordCharacters.concat(lowerCase)
  }
  if (upperConfirm) {
    passwordCharacters = passwordCharacters.concat(upperCase)
  }
  if (numberConfirm) {
    passwordCharacters = passwordCharacters.concat(number)
  }
  if (specialConfirm) {
    passwordCharacters = passwordCharacters.concat(special)
  }
  console.log(passwordCharacters)

  var passwordRandomizer = ""
  for (var i = 0; i < lengthConfirm; i++) {
    passwordRandomizer = passwordRandomizer + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(passwordRandomizer)
  }
  return passwordRandomizer
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

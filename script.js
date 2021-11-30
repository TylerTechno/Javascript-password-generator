// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = [
  "A", "B", "C", "D", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numerical = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = [
  "!", "@", "#", "$", "%", "^", "&", "*",]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword)
function generatePassword() {
  getCharacter = prompt( "You're password should be at least 8 characters long, and no longer than 128 characters.");
if (getCharacter >= 8 && getCharacter <=128) {
  alert("Cool!");
  specifyCharacter();
} else{
  alert("You must choose a valid length of characters!");
  generatePassword();
}
return newPassword
}

function specifyCharacter() {
  specify1 = confirm("Do you want lowercase characters?")
  specify2 = confirm("Do you want uppercase characters?")
  specify3 = confirm("Do you want number characters?")
  specify4 = confirm("Do you want special characters?")
  if (specify1 || specify2 || specify3 || specify4) {
    arrayJoiner()
}
else{
  alert("Choose at least one character criteria")
  specifyCharacter()
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

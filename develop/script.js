// Assignment Code
let st_generateBtn = document.querySelector("#generate");
let st_password = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  let password = st_generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
st_generateBtn.addEventListener("click", writePassword);

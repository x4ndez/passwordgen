// Assignment Code
let st_generateBtn = document.querySelector("#generate");
let st_password = document.querySelector("#password");

// Create arrays for usable characters: alphanumeric array, funky character array

const alphaLower = [
  "a", "b", "c", "d", "e", "f", "g", "h",
  "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x",
  "y", "z"
];

const alphaUpper = [
  "A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X",
  "Y", "Z"
];

const numeric = [
  "1", "2", "3", "4", "5", "6", "7", "8",
  "9"
]

const funky = [
  "`", "!", "@", "#", "$", "%", "^", "&",
  "*", "(", ")", "_", "+", "~", "-", "=",
  "[", "]", ";", "'", ",", ".", "/", "{",
  "}", "|", ":", '"', "<", ">", "?"
];

const bigArray = alphaLower.concat(alphaUpper, numeric, funky); //Join user-selected arrays

// Password object to hold the password value, length and if the user wanted to include funky characters.
let password = {

  value: "",
  length: 5,
  isFunky: true,

}

// Prompt: Password criteria: Alphanumeric, funky, word-by-word (find a word library)

// Prompt: Password length



// Create function to create new randomized array of length given by user, include 0.
// Add functionality to check if there are funky characters in the password if the user has selected funky, if there are no funky characters, re-generate.

function randomNumber() {

  let x = Math.floor(Math.random() * bigArray.length);

  return x;

}

function createRandomPassword(len, funk) {

  let passwordArray = [];

  for (let i = 0; i < len; i++) {

    passwordArray[i] = bigArray[randomNumber()];

  }

  let passwordString = passwordArray.join(""); // Convert array to string

  return passwordString;

}

// Send string to output 'passwordText.value'

// Write password to the #password input
function writePassword() {

  password.value = createRandomPassword(password.length, password.isFunky);

  console.log(password.value);
  st_password.innerHTML = password.value;

}

// Add event listener to generate button
st_generateBtn.addEventListener("click", writePassword);
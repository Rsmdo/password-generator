// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 function generatePassword() {
   var complexity = window.prompt("how many characters do you want in your password");
   var lower = window.confirm("do you want lower case?");
   var upper = window.confirm("do you want upper case?");
   var number = window.confirm("do you want numbers");
   var sym = window.confirm("do you want symbols");
   var choices = []
   if (lower) {
     choices.push(0)
   }
   if (upper) {
    choices.push(1)
   }
  
   if (number) {
    choices.push(2)
   }
  
   if (sym) {
    choices.push(3)
   }

   if (choices.length === 0 || complexity === "0") {
    window.alert("Invalid restarting")
    return writePassword()
   }

   var length = complexity

   charset = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789","!@#$%^&*()"]
   retVal = "";
   console.log(length)
  for (var i = 0; i < length; i++) {
    var type = choices[Math.floor(Math.random()*choices.length)];
    var character = charset[type][Math.floor(Math.random()*charset[type].length)];   
      retVal += character;
   }
   console.log(retVal);
   return retVal;


  };
 passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var generateBtn = document.querySelector("#generate");

// defining arrays of numbers, symbols and letters for password
var numbers = [0,1,2,3,4,5,6,7,8,9];
var upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var symbols = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','/','{','}','[',']','|'];

// set up function variables
var allGood = false;
var answer = "";
var c = "";
var finish = "";
var i = 0;
var inputAnswer = "";
var lcInput = "";
var numInput = "";
var symInput = "";
var ucInput = "";
// check input length

function inputLength(){

  while(goodAnswer === false){
    var inputAnswer = prompt("please enter password len")
  }
}













// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  return "This will be replaced by my generated password."; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

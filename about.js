
//TASK 05; 
// Create empty arrays for contact numbers and names
var ContactNames = [];
var ContactNumbers = [];
//Ask the user to enter his/her contact number and contact names
for (var i = 0; i <= 2; i++) {
var Names = prompt("Enter Your Name.");
var Numbers = prompt("Enter Your Contact Number.");
//push user input in array
ContactNumbers.push(Numbers);
ContactNames.push(Names);
alert("ContactNames: " +Names +" ContactNumbers: "+ Numbers);
document.write("  ContactNames:   " + Names);
document.write("   ContactNumbers:   " + Numbers);
console.log(ContactNames);
console.log(ContactNumbers);
}
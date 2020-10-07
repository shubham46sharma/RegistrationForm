

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var pass = document.getElementById('pass');
var cpass = document.getElementById('cpass');
var num = document.getElementById("num");
var email = document.getElementById("email");
var form = document.getElementById("form");
const errorElement = document.getElementById("error");
var date = document.getElementById("Date");
var month = document.getElementById("month");
var year = document.getElementById("year");

var letters = /^[A-Za-z]+$/;

form.addEventListener('submit', (e) =>{
	let messages = [];
	if(pass.value != cpass.value){
		messages.push("Password doesnot match !!");
	}

	if(pass.value.length > 20 || pass.value.length < 4){
		messages.push("Password should be less than 20 and more than 4 char.");
	}

	if(num.value.length != 10){
		messages.push("Enter correct Phone No.");
	}

	if(fname.value.match(letters)){

	}
	else{
		messages.push("First Name is not valid.");
	}
	if(lname.value.match(letters)){
	}
	else{
		messages.push("Last Name is not valid.");
	}

	if(date.value === 'Day' || month.value=== "Month" || year.value === "Year" ){
		messages.push("Enter Date of Birth");
	}

	if(messages.length > 0){
		e.preventDefault();
		errorElement.innerText = messages.join('\n');
	}
})

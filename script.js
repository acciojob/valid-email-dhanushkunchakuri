function validEmail(str) {
  //your JS code here.
	if(typeof str !== "string" || str.trim() === "") return false;
	let email=/^[a-zA-Z0-9.+%-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})*$/
	
	
	return email.test(str);
	
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));

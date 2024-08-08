var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email-input');
var firstNameError = document.getElementById('FN-error');
var lastNameError = document.getElementById('lastNameError');
var emailError = document.getElementById('emailError');
var contactForm = document.getElementById('myform');
var radioError = document.getElementById("radioError");

// to link your submit div to your submit input
document.getElementById('submit-div').addEventListener('click', function () {
	document.getElementById('submit-input').click();
});

// to link the first radio box div to the radio box
document.getElementById('checkbox1Div').addEventListener('click', function () {
	document.getElementById('checkbox1').click();
});

// to link the second radio box div to the radio box
document.getElementById('checkbox2Div').addEventListener('click', function () {
	document.getElementById('checkbox2').click();
});

contactForm.addEventListener('submit', function (event) {
	event.preventDefault();

	let isValid = true;
	// For first name validation
	if (firstName.value == '') {
		firstNameError.classList.remove('hidden');
		firstName.style.border = "1px solid red";
		isValid = false;
	} else {
		firstNameError.classList.add('hidden');
		
	}

	// For last name validation
	if (lastName.value == '') {
		lastNameError.classList.remove('hidden');
		lastName.style.border = "1px solid red";
		isValid = false;
	} else {
		lastNameError.classList.add('hidden');
	}

	// function for email validation
	function validateEmail(email) {
		const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return re.test(email);
	}
	// For email address validation
	if (!validateEmail(email.value.trim())) {
		emailError.classList.remove('hidden');
		email.style.border = "1px solid red";
		isValid = false;
	} else {
		emailError.classList.add('hidden');
	}


	// For the query side
	// Function to check if the radio button is selected
	function isRadioSelected (name) {
    let radios = document.getElementsByName(name);
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return true;
      }
    }
    return false;
  }

//   Function to validate the radio button
   if (!isRadioSelected("option")) {
     radioError.classList.remove("hidden");
     isValid = false;
   } else {
     radioError.classList.add("hidden");
   }


//  function to validate text area  
if (document.getElementById("textarea").value.trim() === "") {
  document.getElementById("textareaError").classList.remove("hidden");
  document.getElementById("textarea").style.border = "1px solid red";
  isValid = false;
} else {
  document.getElementById("textareaError").classList.add("hidden");
}

// To validate the consent checkbox
if (document.getElementById("consent").checked != true) {
	document.getElementById("consent-para").classList.remove("hidden");
	isValid = false;
}
else{
	document.getElementById("consent-para").classList.add("hidden");
}

	// .....
	if (isValid) {
		

		document.getElementById("alert").classList.remove("hidden")
		this.reset();
		clearErrors();
		window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    	});
		
		// Optionally, you can allow the form to be submitted here
		// this.submit(); // Uncomment this line to actually submit the form
	}
	else{
		document.getElementById("alert").classList.add("hidden");
	}

});

function clearErrors() {
emailError.classList.add("hidden");
lastNameError.classList.add("hidden");
firstNameError.classList.add("hidden");
firstName.style.border = "";
lastName.style.border = "";
  document.getElementById("textarea").style.border = "";
  email.style.border = "";
}

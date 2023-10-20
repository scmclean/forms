// JavaScript code for form validation
function validateForm(event) {
	
  // Prevent form from submitting
  event.preventDefault();
 
  // Retrieve the input field value
  const inputField = document.getElementById('inputField');
  const inputValue = inputField.value;
 
  // Regular expression pattern for alphanumeric input
  const alphanumericRegex = /^[A-Za-z0-9]+$/;

  // Check if the input value matches the pattern
  if (alphanumericRegex.test(inputValue)) {
       
  // Valid input: display confirmation and submit the form
        alert('Validation succeeded! Input is alphanumeric.');
        document.getElementById('myForm').reset();
      } 
       
        // Invalid input: display error message
  else {
        alert('Validation failed! Input is not alphanumeric.');
  }
}

const form = document.getElementById('myForm');
form.addEventListener('submit', validateForm);
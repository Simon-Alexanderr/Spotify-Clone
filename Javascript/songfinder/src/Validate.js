export default function Validate() {
    // Get the value from the input box
    var emailInput = document.getElementById('email').value;

    // Regular expression for a simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regex
    if (emailRegex.test(emailInput)) {
      document.getElementById('result').innerHTML = 'Valid email!';
      document.getElementById('result').style.color = 'green';
    } else {
      document.getElementById('result').innerHTML = 'Invalid email. Please enter a valid email address.';
      document.getElementById('result').style.color = 'red';
    }
  }
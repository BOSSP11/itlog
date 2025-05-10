// Add event listener to the search button
document.querySelector('button').addEventListener('click', function () {
  // Get the input value
  const searchTerm = document.querySelector('input').value.toLowerCase().trim();

  // Define your search terms and links
  const links = {
    'cute': 'https://youtu.be/U06Oqye8_Yk?si=XXmClYkLftw4h1TU', // replace with your actual link
    'pretty': 'https://youtu.be/MD2xgAvyhpo?si=us3SaopNhSkVg-mE', // replace with your actual link
    'adorable': 'https://youtu.be/cQkVRjW0fH4?si=qRseeB6Fi_eajlF9', // replace with your actual link
    'abunjing': 'https://youtu.be/dstuitW8PWM?si=ZVHKuJTw60nGNx1l', // replace with your actual link
  };

  // Check if the input matches any of the search terms
  if (links[searchTerm]) {
    // Redirect to the corresponding link
    window.location.href = links[searchTerm];
  } else {
    alert('No match found!');
  }
});

// Get references to the elements
const clickableImage = document.getElementById('clickableImage');
const messageDisplay = document.getElementById('messageDisplay');
const closeButton = document.getElementById('closeButton');

// When the image is clicked, display the message with a smooth fade-in
clickableImage.addEventListener('click', function() {
  messageDisplay.classList.add('show');
});

// When the close button is clicked, hide the message with a smooth fade-out
closeButton.addEventListener('click', function() {
  messageDisplay.classList.remove('show');
});

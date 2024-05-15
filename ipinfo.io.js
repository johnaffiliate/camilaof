// Create a function to fetch and display the user's location
function fetchUserLocation() {
    // Send a GET request to the ipinfo.io API
    fetch('https://ipinfo.io/json')
        .then(response => {
            // Check if the response status is OK (200)
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Unable to fetch location data.');
            }
        })
        .then(data => {
            // Extract the relevant location information from the API response
            const location = data.city + ', ' + data.region;
        
            // Update the content of the user-location span with the user's location, wrapping it in a <strong> element with the "bold-text" class
            const userLocationElement = document.getElementById('user-location');
            userLocationElement.innerHTML = `Currently staying in <strong class="bold-text">${location}</strong><br> looking to make content with a someone💦<br> Dm if you live nearby  `;
        
            // Apply CSS styles to center and make the text smaller
            userLocationElement.style.textAlign = 'center';
            userLocationElement.style.fontFamily = 'Protest riot, Tahoma, sans-serif'; // Change the font to Oswald or a backup font
            userLocationElement.style.fontSize = '17px'; // You can adjust the font size as needed
            userLocationElement.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Transparent white background
        
            // Update the 📍 emoji span
            document.getElementById('pin-emoji').textContent = '❤️';
        })
        
        .catch(error => {
            // Handle any errors that occur during the fetch operation
            console.error('Error fetching location:', error);
            document.getElementById('user-location').textContent = 'Location unavailable';
        });
}

// Call the fetchUserLocation function to get and display the user's location
fetchUserLocation();


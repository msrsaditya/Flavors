const locationParagraph = document.getElementById("location");
const apiKey = "f2318da0a2304be8840dde0fe9687ea3"; // Replace with your OpenCage Data API key

function getLocation() {
    if ("geolocation" in navigator) {
        // Get the user's location
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Call the reverse geocoding function
            reverseGeocode(latitude, longitude);
        });
    } else {
        locationParagraph.innerHTML = "Geolocation is not supported by your browser.";
    }
}

// Function to perform reverse geocoding
function reverseGeocode(latitude, longitude) {
    // Construct the API URL
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    // Make the API request
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // Handle the API response data here
            console.log(data);
            if (data.results.length > 0) {
                const firstResult = data.results[0];
                const city = firstResult.components.city;
                const country = firstResult.components.country;
                const formattedAddress = firstResult.formatted;
                const displayText = `City: ${city}, Country: ${country}, Address: ${formattedAddress}`;
                locationParagraph.innerHTML = displayText;
            } else {
                locationParagraph.innerHTML = "No results found for the given coordinates.";
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            locationParagraph.innerHTML = "Error occurred while fetching data.";
        });
}

// Call the getLocation function when the page loads
window.addEventListener("load", getLocation);

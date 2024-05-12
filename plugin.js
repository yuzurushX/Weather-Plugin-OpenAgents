function run() {
  // Get the location (city/area) from the user's input
  const location = Host.inputString();

  // Construct the API URL for wttr.in with the specified location and j1 format for JSON output
  const apiUrl = `https://wttr.in/${location}?format=j1`;

  // Create a request object specifying the HTTP method (GET) and headers
  const request = {
    method: "GET",
    url: apiUrl,
    headers: {
      'User-Agent': 'Mozilla/5.0' // Basic user agent to identify the request
    }
  };

  // Send the HTTP request and store the response
  const response = Http.request(request);

  // Error handling: If the response status is not 200 (OK), throw an error
  if (response.status !== 200) {
    throw new Error(`Error fetching weather data: ${response.status} ${response.statusText}`);
  }

  // Parse the JSON response body into a JavaScript object
  const data = JSON.parse(response.body);
  
  // Extract the current weather conditions
  const currentCondition = data.current_condition[0];

  // Extract the location coordinates from the API response
  const LocationCoord = data.request[0].query;

  // Create a result object to store the formatted weather information
  const result = {
    "Location": `${location} (${LocationCoord})`, // Location with coordinates from API
    "Data Time (Local)": currentCondition.localObsDateTime, // Local time of observation
    "Weather": currentCondition.weatherDesc[0].value,      // Weather description (e.g., "Sunny")
    "Temperature": `${currentCondition.temp_C} °C (${currentCondition.temp_F} °F)`, // Temperature in both Celsius and Fahrenheit
    "Humidity": currentCondition.humidity,                 // Humidity percentage
    "Wind": `${currentCondition.winddir16Point} ${currentCondition.windspeedKmph} kmph` // Wind direction and speed
  };

  // Output the formatted weather data as a JSON string
    Host.outputString(JSON.stringify(result, null, 2)+ "\n");  // Pretty-print for readability
}

module.exports = { run };

const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const registrationNumber = document.getElementById('registration-number').value;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9de2bbed23msh91ff2cffda5c83ep12bcaejsn3be008aca588',
      'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
    }
  };
  const apiUrl = `https://aerodatabox.p.rapidapi.com/aircrafts/registration/${registrationNumber}`;

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    // Do something with the data, e.g. display it on the page
    console.log(data);
  } catch (error) {
    // Handle errors, e.g. display an error message to the user
    console.error(error);
  }
});

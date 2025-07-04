async function getCounter() {
    try {
        const response = await fetch('https://spfnfkfcgbtbqxrcej5rekalyq0topav.lambda-url.ap-south-1.on.aws/', {
            method: 'GET'
        });

        const result = await response.json(); // This will give { statusCode, body }
        console.log('Lambda Full Response:', result);

        const data = JSON.parse(result.body); // Parse the string inside 'body'
        console.log('Parsed Data:', data);

        document.getElementById('counter').innerText = `Views: ${data.views}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('counter').innerText = 'Error loading counter';
    }
}

window.onload = getCounter;

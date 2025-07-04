async function getCounter() {
    try {
        const response = await fetch('https://spfnfkfcgbtbqxrcej5rekalyq0topav.lambda-url.ap-south-1.on.aws/', {
            method: 'GET'
        });
        const data = await response.json();
        console.log(data);
        document.getElementById('counter').innerText = `Views: ${data.views}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('counter').innerText = 'Error loading counter';
    }
}

window.onload = getCounter;

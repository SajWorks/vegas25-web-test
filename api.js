const BASE_URL = 'https://amazing-crane-ghastly.ngrok-free.app';
const DATA_PATH = '/api/data';
const PLAY_PATH = '/api/play';
const DATA_URL = BASE_URL + DATA_PATH;
const PLAY_URL = BASE_URL + PLAY_PATH;

async function fetchData() {
    try {
    const res = await fetch(DATA_URL, {
        headers: {
            'ngrok-skip-browser-warning': 'true'
        }
    });
    const data = await res.json();
    document.getElementById('tempF').textContent = data.tempF ?? '--';
    document.getElementById('tempC').textContent = data.tempC ?? '--';
    document.getElementById('hum').textContent = data.humidity ?? '--';
    } catch (err) {
    console.error('Error fetching data:', err);
    }
}

document.getElementById('playBtn').addEventListener('click', async () => {
    try {
    await fetch(PLAY_URL, {
        method: 'POST',
        headers: {
        'ngrok-skip-browser-warning': 'true'
        }
    });
    } catch (err) {
    console.error('Error calling PLAY endpoint:', err);
    }
});

fetchData();
setInterval(fetchData, 3000); // Refresh every 3 seconds
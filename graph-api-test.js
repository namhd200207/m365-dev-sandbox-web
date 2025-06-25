const fetch = require('node-fetch');

async function callGraphAPI() {
    const url = 'https://graph.microsoft.com/v1.0/me';
    const token = 'YOUR_ACCESS_TOKEN'; // Thay bằng access token của bạn

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    console.log(data);
}

callGraphAPI();

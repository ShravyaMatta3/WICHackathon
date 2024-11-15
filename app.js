async function fetchParkingData() {
    try {
        const response = await fetch('parking_data.json'); // Load JSON data
        const lots = await response.json();
        displayParkingData(lots);
    } catch (error) {
        console.error('Error loading parking data:', error);
    }
}

function displayParkingData(lots) {
    const container = document.getElementById('parking-lots');
    container.innerHTML = '';  // Clear previous content

    lots.forEach(lot => {
        const lotElement = document.createElement('div');
        lotElement.className = 'parking-lot';
        lotElement.innerHTML = `
            <h2>${lot.name}</h2>
            <p>Total Spaces: ${lot.total_spaces}</p>
            <p>Available Spaces: ${lot.available_spaces}</p>
        `;
        container.appendChild(lotElement);
    });
}

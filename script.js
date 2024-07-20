const playerData = {
    "Avery": {
        "Risk Profile": "high",
        "Resiliency": "low",
        "Conscientiousness": "medium",
        "Endurance": "low",
        "Mental Flexibility": "high"
    },
    "Julia Bishop": {
        "Risk Profile": "medium",
        "Resiliency": "medium",
        "Conscientiousness": "low",
        "Endurance": "medium",
        "Mental Flexibility": "medium"
    }
    // Add more players as needed
};

function fetchPlayerData() {
    const playerName = document.getElementById('player-name').value.trim();
    const player = playerData[playerName];

    if (player) {
        displayPlayerData(playerName, player);
    } else {
        displayPlayerData(null, null);
    }
}

function displayPlayerData(name, data) {
    const playerDataDiv = document.getElementById('player-data');
    playerDataDiv.innerHTML = '';

    if (!data) {
        playerDataDiv.textContent = 'Player not found';
        return;
    }

    const playerInfo = `
        <h2>${name}</h2>
        <p>Risk Profile: ${data['Risk Profile']}</p>
        <p>Resiliency: ${data['Resiliency']}</p>
        <p>Conscientiousness: ${data['Conscientiousness']}</p>
        <p>Endurance: ${data['Endurance']}</p>
        <p>Mental Flexibility: ${data['Mental Flexibility']}</p>
    `;
    playerDataDiv.innerHTML = playerInfo;
}

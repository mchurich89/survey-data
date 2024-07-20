const playerData = {
    {
        "Avery": {
            "Risk Profile": "high",
            "Resiliency": "medium",
            "Conscientiousness": "high",
            "Endurance": "low",
            "Mental Flexibility": "high"
        },
        "Julia Bishop": {
            "Risk Profile": "medium",
            "Resiliency": "medium",
            "Conscientiousness": "medium",
            "Endurance": "low",
            "Mental Flexibility": "high"
        },
        "Jayhlin Swain": {
            "Risk Profile": "high",
            "Resiliency": "low",
            "Conscientiousness": "high",
            "Endurance": "medium",
            "Mental Flexibility": "high"
        },
        "Cameron Berger": {
            "Risk Profile": "high",
            "Resiliency": "low",
            "Conscientiousness": "high",
            "Endurance": "medium",
            "Mental Flexibility": "high"
        },
        "Nalani Iosia": {
            "Risk Profile": "medium",
            "Resiliency": "medium",
            "Conscientiousness": "high",
            "Endurance": "medium",
            "Mental Flexibility": "high"
        },
        "Amani McArthur": {
            "Risk Profile": "high",
            "Resiliency": "low",
            "Conscientiousness": "medium",
            "Endurance": "medium",
            "Mental Flexibility": "high"
        },
        "Maradith O’Gorman": {
            "Risk Profile": "high",
            "Resiliency": "medium",
            "Conscientiousness": "high",
            "Endurance": "medium",
            "Mental Flexibility": "high"
        },
        "Grace Kelly": {
            "Risk Profile": "medium",
            "Resiliency": "low",
            "Conscientiousness": "high",
            "Endurance": "high",
            "Mental Flexibility": "high"
        },
        "Karolina Staniszewska": {
            "Risk Profile": "medium",
            "Resiliency": "medium",
            "Conscientiousness": "high",
            "Endurance": "medium",
            "Mental Flexibility": "high"
        },
        "Aliyah Moore": {
            "Risk Profile": "high",
            "Resiliency": "low",
            "Conscientiousness": "medium",
            "Endurance": "high",
            "Mental Flexibility": "high"
        },
        "Kaya": {
            "Risk Profile": "high",
            "Resiliency": "low",
            "Conscientiousness": "medium",
            "Endurance": "medium",
            "Mental Flexibility": "high"
        },
        "Zuzanna": {
            "Risk Profile": "high",
            "Resiliency": "medium",
            "Conscientiousness": "medium",
            "Endurance": "medium",
            "Mental Flexibility": "high"
        },
        "Taylah Holdem": {
            "Risk Profile": "high",
            "Resiliency": "low",
            "Conscientiousness": "high",
            "Endurance": "medium",
            "Mental Flexibility": "high"
        },
        "Selin Aslayan": {
            "Risk Profile": "high",
            "Resiliency": "low",
            "Conscientiousness": "high",
            "Endurance": "medium",
            "Mental Flexibility": "high"
        },
        "Makya": {
            "Risk Profile": "high",
            "Resiliency": "low",
            "Conscientiousness": "high",
            "Endurance": "medium",
            "Mental Flexibility": "high"
        },
        "Evie Doezema": {
            "Risk Profile": "high",
            "Resiliency": "low",
            "Conscientiousness": "high",
            "Endurance": "low",
            "Mental Flexibility": "high"
        }
    }
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

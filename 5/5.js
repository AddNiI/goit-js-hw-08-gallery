document.addEventListener('DOMContentLoaded', () => {
    const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
    let currentKeyIndex = 0;

    const keyElement = document.getElementById('key');
    const gameStatus = document.getElementById('game-status');
    const newGameButton = document.getElementById('new-game');

    function setNewKey() {
        currentKeyIndex = Math.floor(Math.random() * keys.length);
        keyElement.textContent = keys[currentKeyIndex];
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === keys[currentKeyIndex]) {
            setNewKey();
            PNotify.success({
                text: 'Correct key pressed!',
                delay: 1000
            });
        } else {
            PNotify.error({
                text: 'Wrong key pressed!',
                delay: 1000
            });
        }
    });

    document.addEventListener('keypress', (event) => {
        event.preventDefault();
    });

    newGameButton.addEventListener('click', () => {
        setNewKey();
        PNotify.info({
            text: 'New game started!',
            delay: 1000
        });
    });

    setNewKey();
});

const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
        {
            label: "Продажі за останній місяць",
            data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
            borderWidth: 1,
        },
    ],
};

const ctx = document.getElementById('sales-chart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

const hotels = [
    {
        name: 'Lakewood',
        classification: 3,
        weekday: {
            regular: 110,
            reward: 80
        },
        weekend: {
            regular: 90,
            reward: 80
        }
    },
    {
        name: 'Bridgewood',
        classification: 4,
        weekday: {
            regular: 160,
            reward: 110
        },
        weekend: {
            regular: 60,
            reward: 50
        }
    },
    {
        name: 'Ridgewood',
        classification: 5,
        weekday: {
            regular: 220,
            reward: 100
        },
        weekend: {
            regular: 150,
            reward: 40
        }
    }
]

module.exports = hotels;
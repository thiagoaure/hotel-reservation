const hotels = require('./data/hotels');

const CheapestHotel = {
    name: '',
    totalPrice: 0,
}

const weekday = ['mon', 'tues', 'wed', 'thur', 'fri'];
const weekend = ['sat', 'sun'];

function countDaysOfWeek(input) {
    let countWeekday = 0;
    let countWeekend = 0;

    const typeClient = input.split(":");

    weekday.map((item, index) => {
        if(input.includes(item)) {
            countWeekday++;
        }
    })

    weekend.map((item, index) => {
        if(input.includes(item)) {
            countWeekend++;
        }
    })
    return {typeClient, countWeekday, countWeekend}
}

function getCheapestHotel (input) { //DO NOT change the function's name.
    return "Cheapest hotel name"
}

exports.getCheapestHotel = getCheapestHotel

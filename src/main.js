const hotels = require('./data/hotels');

const CheapestHotel = {
    name: '',
    classification: 0,
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
    const {typeClient, countWeekday, countWeekend} = countDaysOfWeek(input);

    if (typeClient[0] === "Regular") {
        CheapestHotel.name =  hotels[0].name;
        CheapestHotel.totalPrice = (hotels[0].weekday.regular * countWeekday) + (hotels[0].weekend.regular * countWeekend);
        CheapestHotel.classification = hotels[0].classification;
        for (let i = 0; i < hotels.length; i++) {
            let currentPrice = (hotels[i].weekday.regular * countWeekday) + (hotels[i].weekend.regular * countWeekend);
            if (currentPrice < CheapestHotel.totalPrice) {
                CheapestHotel.name = hotels[i].name;
                CheapestHotel.classification = hotels[i].classification;
                CheapestHotel.totalPrice = currentPrice;
            } else if (currentPrice ==  CheapestHotel.totalPrice) {
                if(CheapestHotel.classification < hotels[i].classification) {
                    CheapestHotel.name = hotels[i].name;
                    CheapestHotel.classification = hotels[i].classification;
                    CheapestHotel.totalPrice = currentPrice;
                }
            }
        }
    } else if (typeClient[0] === "Rewards") {
        CheapestHotel.name =  hotels[0].name;
        CheapestHotel.totalPrice = (hotels[0].weekday.reward * countWeekday) + (hotels[0].weekend.reward * countWeekend);
        CheapestHotel.classification = hotels[0].classification;
        for (let i = 0; i < hotels.length; i++) {
            let currentPrice = (hotels[i].weekday.reward * countWeekday) + (hotels[i].weekend.reward * countWeekend);
            if (currentPrice < CheapestHotel.totalPrice) {
                CheapestHotel.name = hotels[i].name;
                CheapestHotel.classification = hotels[i].classification;
                CheapestHotel.totalPrice = currentPrice;
            } else if (currentPrice ==  CheapestHotel.totalPrice) {
                if(CheapestHotel.classification < hotels[i].classification) {
                    CheapestHotel.name = hotels[i].name;
                    CheapestHotel.classification = hotels[i].classification;
                    CheapestHotel.totalPrice = currentPrice;
                }
            }
        }

    }
    return CheapestHotel.name;
}

exports.getCheapestHotel = getCheapestHotel

let readlineSync = require('readline-sync')
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

function getCheapestHotelRegular(countWeekday, countWeekend) {
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
}

function getCheapestHotelReward(countWeekday, countWeekend) {
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

function getCheapestHotel (input) { //DO NOT change the function's name.
    const {typeClient, countWeekday, countWeekend} = countDaysOfWeek(input);

    if (typeClient[0] === "Regular") {
        getCheapestHotelRegular(countWeekday, countWeekend);
        
    } else if (typeClient[0] === "Rewards") {
       getCheapestHotelReward(countWeekday, countWeekend);

    }
    return CheapestHotel.name;
}

console.log('\nEntre com o tipo de hospedagem e datas desejadas pelo cliente:');
const input = readlineSync.question('Formato exemplo esperado:   Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)\n')
console.log(getCheapestHotel(input))

exports.getCheapestHotel = getCheapestHotel

const request = require('request-promise');

const API_KEY = 'cc5fff3a0dc3dc79e02b59fb126f10fe';

class Weather {
    static retrieveByCity (city, callback) {
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`,
            json: true
        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            console.log(err);
            callback({ error: 'Could not reach OpenWeatherMap API.' });
        });
    }
}

module.exports = Weather;
const request = require('postman-request')


const forecast = (lat, long, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=c72aaed13d1044cebcb74947212109&q=' + lat + ',' + long
    request({url, json:true}, (error, res) => {
    if (error) {
        callback('Unalbe to connect to weather services')
    } else if (res.error) {
        callback('Unable to find location', undefined)
    } else {
            callback(undefined, res.body)
    }
})
}

module.exports = forecast
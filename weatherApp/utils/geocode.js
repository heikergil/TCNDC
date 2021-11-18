const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoiZXhwb25lbnRpYWwiLCJhIjoiY2tpMXEzdGczMG56ZDJ5bXN1dWljNm1uaSJ9.Woneln9FvtHIeqAEShnr2A'

    request({url, json: true}, (error, { body}) => {
        if (error) {
            callback('unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location, Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode


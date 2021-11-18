const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (location) {
    
}
geocode(location, (error, {latitude, longitude } = {}) => {
    if (error) {
        console.log('Geocode Error:', error)
    } else if (latitude && longitude) {
        forecast(latitude, longitude, (error, data) => {
            if (error) {
                console.log('Forecast error', error)
            } else if (data) {
                const { name } = data.location
                const { temp_c } = data.current
                console.log('Data:', 'in ' + name + ' is ' + temp_c + 'º' )
            } else {
                console.log('Something went wrong with forecast')
            }                      
          })
    } else {
        console.log('Something went wrong with geocode')
    }

    


})
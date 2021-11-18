// const { request } = require('http')
const https = require('https')


const url = 'https://api.weatherapi.com/v1/current.json?key=c72aaed13d1044cebcb74947212109&q=cabimas'


const request = https.request(url, (response) =>{
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})


request.on('error', (error) => {
    console.log("error", error)
})

request.end()
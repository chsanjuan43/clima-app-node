const axios = require('axios');

const getClima = async( lat , lon) => {
            
   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather`
   ,
    {
        params: {
            lat,
            lon,
            appid: '0ff1f71a6382ec659f209c13df05d96b',
            units: 'metric'
        }
    })

    return resp.data.main.temp
    
}
module.exports = {
    getClima
}

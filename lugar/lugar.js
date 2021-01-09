const axios = require('axios')

const getLugarLatLon = async (direccion) => {

  const encodeUrl = encodeURI(direccion);
  const instance = axios.create({
    baseURL:'http://api.weatherapi.com/v1/current.json',
    params: {
        key: '54eea8ac81fb4551bfa141410210801',
        q : encodeUrl
    } 

  });

  try{

    const resp = await instance.get();

    const dir = resp.data.location.name;
    const lat = resp.data.location.lat;
    const lon = resp. data.location.lon;
  
    return {
          dir,
          lat,
          lon
    }

  } catch (err) {
    throw new Error (`No Se encontro información para la direccion ${direccion}`);
  }

}

module.exports = {
    getLugarLatLon
}

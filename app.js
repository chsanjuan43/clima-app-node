const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la cuidad para obtener el clima'        
    }
}).argv


const getInfo = async ( direccion ) => {

    try {

        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);

        return `El clima de ${coords.dir} es de ${temp}`;
        
    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${direccion}`)
    }

}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log)


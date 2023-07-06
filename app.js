import dotenv from 'dotenv';
import express from 'express';

/**
 * * Configuracion del middleware
 * ? Se habilita la entrada de datos de tipo json y text 
 * @var {express.json(), express.text()}
 */

dotenv.config();
const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());

expressApp.post("/campus/:nombre", (req, res) => {
    /**
     * ? Obtenemos los datos de entrada
     * @var {req.body} * Datos enviados del cliente
     * @var {req.query} * Datos adicionales de la url
     * @var {req.params} * Parameters
     */
    let obj = {
        DATA: req.body,
        'URL-GET': req.query,
        PARAMETROS: req.params
    }
    res.send(obj);
});

let config = JSON.parse(process.env.MY_CONFIG);
expressApp.listen(config, () => {
    console.log(`Server is running on port https://${config.hostname}:${config.port}`)
});





const { JSDOM } = require('jsdom');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Crie uma instância JSDOM para fornecer o objeto window
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
global.window = dom.window;

// Agora importe o módulo powerbi-client após definir global.window
const powerbi = require('powerbi-client');
const embedToken = require('./embedConfigService.js');
const utils = require('./utils.js');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js/')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist/')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/powerbi-client/dist/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css/')));
app.use('/public', express.static(path.join(__dirname, 'public/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/getEmbedToken', async (req, res) => {
    try {
        // Validate whether all the required configurations are provided in config.json
        const configCheckResult = utils.validateConfig();
        if (configCheckResult) {
            return res.status(400).send({ error: configCheckResult });
        }

        // Get the details like Embed URL, Access token, and Expiry
        const result = await embedToken.getEmbedInfo();

        // `result.status` specifies the statusCode that will be sent along with the result object
        res.status(result.status).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

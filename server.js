/* For env file function */
const dotenv = require('dotenv');
dotenv.config();

if (!process.env.HTTP_HOST) {
    console.log('Please configure env file.')
    console.log('Copy .env.default to .env and configure the values.')
    return
}

const fs = require('fs');
if (process.env.HTTPS == "true") {
    var http = require('https');
    var options = {
        key: fs.readFileSync(process.env.HTTPS_KEY),
        cert: fs.readFileSync(process.env.HTTPS_CERT)
    };

}
else {
    var http = require('http');
    var options = {};
}

const app = require('./node_app/app');

const httpHost = process.env.HTTP_HOST || 'localhost';
const httpPort = process.env.HTTP_PORT || 8000;

const server = http.createServer(options, app);
server.listen(httpPort, httpHost);
console.log('Server listening on ' + httpHost + ':' + httpPort)
const express = require('express'); // for api framework
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser'); // for accept the all form data i.e get, post, on, put
const mongoose = require('mongoose'); // for access the models
const fs = require('fs');
const util = require('util');
const i18n = require('i18n');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();
const cwd = process.cwd();
const env = process.env

mongoose.set('useCreateIndex', true); // mongoose default config settings
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});


app.use(express.static(cwd + '/dist'));
app.use(express.static(cwd + '/assets'));
app.use(async (req, res, next) => {
    var url = req.url;
    const uriArray = url.split('/');
    if (uriArray[1] !== 'api') {
        console.log("DFDFDF");
        const readFile = util.promisify(fs.readFile)
        if (uriArray[1] == "assets") {
            console.log(uriArray)
            const pathImage = uriArray[2];
            if (typeof pathImage !== "undefined") {
                const pathImage = uriArray[2];
                const extension = pathImage.split('.').pop();
                if(extension == 'svg') {
                    return res.sendFile(cwd, + '/dist/user-app/' + pathImage);
                }
                else {
                    const contentType = 'image/' + extension;
                    const file = cwd + '/dist/user-app/' + url;
                    fileToLoad = fs.readFileSync(file);
                    res.writeHead(200, { 'Content-Type': contentType });
                    return res.end(fileToLoad, 'binary');
                }
            }
        } else {
            try {
                var text = await readFile(cwd + '/dist/user-app/index.html', 'utf8')
                return res.send(text)
            } catch (error) {
                console.log(error);
                return res.send(error.message)
            }
        }
    }
    next()
});
app.use((req, res, next) => {
    return res.send('404');
});

module.exports = app;
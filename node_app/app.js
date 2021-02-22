const express = require('express')
const cors = require('cors');
const app = express();
const cwd = process.cwd();
const env = process.env

app.use(cors());
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});


app.use(express.static(cwd + '/dist/user-app'));
app.use(express.static(cwd + '/assets'));
app.use(async (req, res, next) => {
    var url = req.url;
    const uriArray = url.split('/');
    if (uriArray[1] !== 'api') {
        const readFile = util.promisify(fs.readFile)
        if (uriArray[1] == "assets") {
            const pathImage = uriArray[2];
            var extension = pathImage.split('.').pop();
            url = url.split('?');
            url = url[0];
            var extension_exp = extension.split('?');
            if (extension_exp.length == 2) {
                extension = extension_exp[0]
            }
            const contentType = 'image/' + extension;
            const file = "." + url;
            // console.log(file)
            fileToLoad = fs.readFileSync(file);
            res.writeHead(200, { 'Content-Type': contentType });
            return res.end(fileToLoad, 'binary');
        } else {
            try {
                var text = await readFile(cwd + '/dist/user-app/index.html', 'utf8')
                return res.send(text)
            } catch (error) {
                return res.send(error.message)
            }
        }
    }
    next()
});

/* Not Found Middleware */
app.use((req, res, next) => {
    return res.send('404');
});

module.exports = app;
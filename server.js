//Install express server
const express = require('express');

const app = express();
const cwd = process.cwd();

// Serve only the static files form the dist directory
app.use(express.static('./dist/user-app'));

console.log("run")
app.get('/', async(req, res) => {
    console.log("req")
    try {
        console.log("try")
        var text = await readFile(cwd + '/dist/user-app/index.html', 'utf8')
        return res.send(text)
    } catch (error) {
        console.log("cache")
        return res.send(error.message)
    }
});

// Start the app by listening on the default Heroku port
app.listen(process.env.HTTP_PORT || 8080);
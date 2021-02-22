//Install express server
const express = require('express');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/user-app'));

app.get('/', (req, res) =>
    res.sendFile('index.html', { root: 'dist/user-app/' }),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.HTTP_PORT || 8080);
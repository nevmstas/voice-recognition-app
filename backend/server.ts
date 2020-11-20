import express = require('express');
import config = require('config')

const PORT = config.get("port") || 5000
// Create a new express app instance
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

async function start() {
    try {
        app.listen(PORT, () => console.log(`app has been started on port ${PORT} ...`))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()
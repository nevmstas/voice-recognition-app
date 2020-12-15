const express = require('express');
const config = require('config');
const { VoiceGenderPredictor } = require('./Services/VoiceGenderPredictor');


const PORT = config.get("port") || 5000
// Create a new express app instance
const app = express();

app.get('/', function (req, res) {
    const kek = new VoiceGenderPredictor()
    const kek2 = kek.classyfy()
    res.send(kek2);
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
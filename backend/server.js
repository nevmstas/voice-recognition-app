const express = require('express');
const config = require('config');
const { VoiceGenderPredictor } = require('./Services/VoiceGenderPredictor');


const PORT = config.get("port") || 5000
// Create a new express app instance
const app = express();

app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res) {
    const mock = [
        0.0597809849598081,
        0.0642412677031359,
        0.032026913372582,
        0.0150714886459209,
        0.0901934398654331,
        0.0751219512195122,
        12.8634618371626,
        274.402905502067,
        0.893369416700807,
        0.491917766397811,
        0,
        0.0597809849598081,
        0.084279106440321,
        0.0157016683022571,
        0.275862068965517,
        0.0078125,
        0.0078125,
        0.0078125,
        0,
        0,
      ];
    const predictor = new VoiceGenderPredictor()
    predictor.classyfy(mock)
    res.send('hello world');
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
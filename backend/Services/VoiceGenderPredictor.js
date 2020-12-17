const tf = require("@tensorflow/tfjs");
//require('@tensorflow/tfjs-node');

const __devEndpoint = "http://localhost:5000";

class VoiceGenderPredictor {
  constructor() {
    this.model = tf.loadLayersModel(`${__devEndpoint}/tfjsModel/model.json`);
  }

  classyfy = async (voiceArray) => {
    this.model.then(
      function (res) {
        const shape = [1, 20];
        const a = tf.tensor(voiceArray, shape);
        const prediction = res.predict(a)
        console.log(prediction)
        console.log(prediction.toString())
      },
      function (err) {
        return err;
      }
    );
  };
}

module.exports = { VoiceGenderPredictor };

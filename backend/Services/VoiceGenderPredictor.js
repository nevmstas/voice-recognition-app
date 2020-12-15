const tf = require("@tensorflow/tfjs");

class VoiceGenderPredictor {
    constructor(){
        this.model;
        this.modelPath = `file:///${__dirname}/../ResNet50/model.json`;
    }

    initialize = async () => {
        this.model = await tf.loadLayersModel(this.modelPath);
    };

    static create = async () =>{
        const o = new VoiceGenderPredictor()
        await o.initialize()
        return o
    }

    getVoice = () =>{
        return false
    }
    
    classyfy = async () =>{
        const voice = await this.getVoice()
        const prediction = await this.model.predict(voice)

        return prediction
    }
}

module.exports = { VoiceGenderPredictor }


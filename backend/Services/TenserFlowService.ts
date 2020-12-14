const tf = require("@tensorflow/tfjs");
const tfn = require("@tensorflow/tfjs-node");

export class TenserFlowService {
    getModel = async () =>{
        //const model = await tf.loadLayersModel('file://path/to/my-model/model.json');
        const handler = tfn.io.fileSystem("../ml/tfjsModel/model.json");
        const model = await tf.loadLayersModel(handler);
        return model
    }
}

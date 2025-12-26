const tf = require("@tensorflow/tfjs-node");
const { createCanvas, loadImage } = require("canvas");
const path = require("path");

let model = null;

async function loadModel() {
  if (!model) {
    const modelPath = `file://${path.join(__dirname, "../model/model.json")}`;
    model = await tf.loadLayersModel(modelPath);
    console.log("✅ Offline digit model loaded");
  }
  return model;
}

async function preprocessImage(base64Image) {
  const buffer = Buffer.from(
    base64Image.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  const img = await loadImage(buffer);

  const canvas = createCanvas(28, 28);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 28, 28);

  ctx.drawImage(img, 0, 0, 28, 28);

  const imageData = ctx.getImageData(0, 0, 28, 28);
  const data = imageData.data;

  const pixels = [];

  for (let i = 0; i < data.length; i += 4) {
    const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
    pixels.push((255 - gray) / 255);
  }

  return tf.tensor4d(pixels, [1, 28, 28, 1]);
}

async function detectDigitFromImage(base64Image) {
  try {
    const loadedModel = await loadModel();
    const inputTensor = await preprocessImage(base64Image);

    const prediction = loadedModel.predict(inputTensor);
    const digit = prediction.argMax(-1).dataSync()[0];

    tf.dispose([inputTensor, prediction]);

    return digit.toString();
  } catch (err) {
    console.error("Digit detection error:", err.message);
    throw new Error("Digit detection failed");
  }
}

module.exports = {
  detectDigitFromImage
};

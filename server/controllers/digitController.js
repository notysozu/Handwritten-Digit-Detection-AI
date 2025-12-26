const { detectDigitFromImage } = require("../utils/digitModelHelper");

async function detectDigit(req, res) {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: "Image data is required" });
    }

    const digit = await detectDigitFromImage(image);

    res.json({
      success: true,
      digit: digit
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Digit detection failed"
    });
  }
}

module.exports = {
  detectDigit
};

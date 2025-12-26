const express = require("express");
const router = express.Router();

const { detectDigit } = require("../controllers/digitController");

router.post("/detect-digit", detectDigit);

module.exports = router;

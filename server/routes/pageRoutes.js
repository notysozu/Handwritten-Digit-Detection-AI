const express = require("express");
const router = express.Router();

const { renderHomePage } = require("../controllers/pageController");

router.get("/", renderHomePage);

module.exports = router;

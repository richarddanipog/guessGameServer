const express = require('express');
const router = express.Router();
const {getGameHistory} = require('../db/api/game-results');

/* GET history game. */
router.get('/', async function(req, res, next) {
    const games = await getGameHistory();
    res.status(200).json({ games });
});

module.exports = router;

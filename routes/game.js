const express = require('express');
const router = express.Router();
const {getGameHistory,sendResultGame} = require('../db/api/game-results');

/* GET history game. */
router.get('/', async function(req, res, next) {
    const games = await getGameHistory();
    res.status(200).json({ games });
});


router.post('/', async function(req, res, next) {
    const gameover = await sendResultGame(req.query)
    res.status(200).json({ gameover });
});
module.exports = router;

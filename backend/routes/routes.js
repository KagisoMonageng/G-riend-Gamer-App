const express = require('express');
const gamer = require('../controllers/gamer')

const router = express.Router()

router.post('/register',gamer.register);

router.post('/login',gamer.login);

router.get('/search',gamer.searchGamers);

router.get('/search/:gametag',gamer.getOneGamer);

module.exports = router;
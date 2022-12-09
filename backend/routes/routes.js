const express = require('express');
const gamer = require('../controllers/gamer')
const games = require('../controllers/games')

const router = express.Router()

router.post('/register',gamer.register);

router.post('/login',gamer.login);

router.get('/getGames',games.getAllGames)

router.get('/getGames/:gametag',games.getGamerFavs)

router.get('/getGame/:game_id',games.getOneGame)

router.patch('/addToFavs/:gametag/:game_id',games.addToFavs)

router.get('/openChat/:roomId',gamer.ChatRequest)

router.patch('/addFriend/:gametag',gamer.addFriend)

router.get('/searchGamers/:gametag',gamer.searchGamers);

router.get('/search/:gametag',gamer.getOneGamer);

router.post('/forgotPassword',gamer.forgotPassword);

router.patch('/update/:gametag',gamer.updateGamer);

router.patch('/updateProfilePicture/:gametag',gamer.updateImage);


module.exports = router;
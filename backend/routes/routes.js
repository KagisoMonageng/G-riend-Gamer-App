const express = require('express');
const gamer = require('../controllers/gamer')
const games = require('../controllers/games')
const comments = require('../controllers/comments')

const router = express.Router()
//Authorization
router.post('/register',gamer.register);

router.post('/login',gamer.login);


//Comments
router.get('/getComments/:game_id',comments.getComments)

router.post('/comment/:game_id/:gametag',comments.addComment)

router.patch('/comment/:comment_id',comments.editComment)

router.patch('/delete-comment/:comment_id',comments.deleteComment)

//Games
router.get('/getGames',games.getAllGames)

router.get('/getGames/:gametag',games.getGamerFavs)

router.get('/getGame/:game_id',games.getOneGame)

router.patch('/addToFavs/:gametag/:game_id',games.addToFavs)

//User Functions
router.get('/openChat/:roomId',gamer.ChatRequest)

router.patch('/addFriend/:gametag',gamer.addFriend)

router.get('/searchGamers/:gametag',gamer.searchGamers);

router.get('/search/:gametag',gamer.getOneGamer);

router.post('/forgotPassword',gamer.forgotPassword);

router.patch('/update/:gametag',gamer.updateGamer);

router.patch('/updateProfilePicture/:gametag',gamer.updateImage);


module.exports = router;
const express = require('express');
const gamer = require('../controllers/gamer')

const router = express.Router()

router.post('/register',gamer.register);

router.post('/login',gamer.login);

router.get('/openChat/:roomId',gamer.ChatRequest)

router.patch('/addFriend/:gametag/:friendTag',gamer.addFriend)

router.get('/searchGamers/:gametag',gamer.searchGamers);

router.get('/search/:gametag',gamer.getOneGamer);

router.post('/forgotPassword',gamer.forgotPassword);

router.patch('/update/:gametag',gamer.updateGamer);

router.patch('/updateProfilePicture/:gametag',gamer.updateImage);

//router.post('/sendMessage/:gametag',gamer.sendMessage)

module.exports = router;
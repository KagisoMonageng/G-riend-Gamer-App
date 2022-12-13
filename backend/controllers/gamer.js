const Client = require('pg').Pool;
const jwt = require("jsonwebtoken");


const express = require('express');
const app = express();
const socketServer = require('http').createServer(app);
const io = require('socket.io')(socketServer, {
    cors: {origin : '*'}
  });

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const { randomInt } = require('crypto');

// const db = new Client({
//     user: 'admin',  //Database username
//     host: 'localhost',  //Database host
//     database: 'griend_db', //Database database
//     password: 'admin12345', //Database password
//     port: 5433//Database port
//   })

const db = require('../config/db_config')



  const sender =  "griendgamer@outlook.com";

  var transporter = nodemailer.createTransport({
       
    service:'hotmail',
    auth: {
      user: 'griendgamer@outlook.com', // 
      pass: 'YourGamerFriend44', // 
    },
  });

  emailDetails = {
    from: '', //where the email is from 
    to: '', //where the email is to
    subject: '', //email subject
    text: '', //email
    
     
  }

  messageData = {
    message:'',
    sender: '', 
    reciepient:'',
    time: ''

  }

const image = 'https://res.cloudinary.com/dev-lab/image/upload/v1669475311/vecteezy_game-shop-vector-logo-design-shopping-bag-combination_10949766_hgwhg1.jpg';
users = [];

exports.register = async (req, res)=>{ 

    const { email , password ,name ,surname , gender, birthday} = req.body;

    const sql = 'SELECT * FROM gamers WHERE email = $1';
    db.query(sql,[email],(err, results)=>{
        if(results.rowCount == 0)
        {
            let number = Math.floor(Math.random()*(2000 - 100) + 100);
            let gametag = name.toLowerCase()+number;

                db.query(
                    'INSERT INTO gamers (name,surname,email,password,gender,image,birthday,gametag) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',[name,surname,email,password,gender,image,birthday,gametag],
                    (db_err,results) => {
                        if(db_err)
                        {
                            res.status(400).json({message:db_err.message});
                        }else
                        {
                            db.query('UPDATE gamers SET games = array_append(games, $1) where gametag = $2',[0,results.rows[0].gametag],(err, results)=>{
                                if(err){
                                    console.log(err)
                                    res.status(400).json({message:'Query failed'})
                                }else{
                                    res.status(200).json({message:'Game added to favorites'})
                                }
                            })
                            const token = jwt.sign({
                                gamer_id: results.rows[0].gamer_id,
                                email: results.rows[0].email,
                                gametag: results.rows[0].gametag,
                                name: results.rows[0].name,
                                surname: results.rows[0].surname,
                                image: results.rows[0].image 
                            },
                            process.env.SECRET_KEY,{
                                algorithm: 'HS256',
                                expiresIn: 120000000
                            });

                            //res.status(200).json({message: "Account successully registered",token: token,});
                            emailDetails.from = sender;
                            emailDetails.to = results.rows[0].email;
                            emailDetails.text = "Welcome! "+results.rows[0].name+'\n\nThis is your generated gametag \n'+results.rows[0].gametag +'\nUse it to sign in to your account along with your password. \n\nGriend\nYour Gamer Friend.';
                            emailDetails.subject = "Welcome to Griend";

                            transporter.sendMail(emailDetails,(emailErr)=>{
                                if(emailErr){
                                    res.status(400).json(emailErr.message);
                                }else{
                                    res.status(200).json({message: "Account successully registered",token: token,});
                                }
                            });

                        }   
            })
        }else
        {
            res.status(400).json({message:'Email already exists.'});
        }
    });
}

exports.login =  (req, res)=>{
    const {cred,password} = req.body;
    const sql = 'SELECT * FROM gamers WHERE email = $1 OR gametag = $1';
    db.query(sql,[cred],(err, results)=>{
        if(err) 
        {res.status(400).json({message:err.message})}
        else{
            if(results.rowCount == 0)
            {
                res.status(400).json({message: "User does not exist, Please register"})
            }else{
                
                    if(password != results.rows[0].password)
                    {
                        res.status(400).json({message: "Invalid Credentials, Please try again"});

                    }else
                    {
                        const token = jwt.sign({
                                gamer_id: results.rows[0].gamer_id,
                                email: results.rows[0].email,
                                gametag: results.rows[0].gametag,
                                name: results.rows[0].name,
                                surname: results.rows[0].surname,
                                image: results.rows[0].image   
                            },
                            process.env.SECRET_KEY,{
                                algorithm: 'HS256',
                                expiresIn: 120000000
                            });
                            
                            res.status(200).json({message: "Welcome! "+results.rows[0].name,token: token,}); 
                   }
                
                 
                    
                }

        }

    })  
}

exports.searchGamers = (req, res) => {

    const currentGamer =req.params.gametag;
    
    const sql = "SELECT * FROM gamers WHERE gametag != $1";
    db.query(sql,[currentGamer],(err, results)=>{
        if(err) { res.status(400).json({message:'Query failed'}) }else{
            res.status(200).json(results.rows);
        }
    })
}

exports.getOneGamer = (req, res) => {

    const gametag = req.params.gametag;
    const sql = "SELECT * FROM gamers WHERE gametag = $1";
    db.query(sql,[gametag],(err, results)=>{
        if(err) { res.status(400).json({message:'Query failed'}) }else{

            if(results.rowCount == 0)
            {
                res.status(400).json({message:'No gamer found'})
            }
            else
            {
                res.status(200).json(results.rows[0]);
                
            }
        }
    })
}

exports.forgotPassword  = (req, res) =>{
    const email = req.body.email;
    const sql = "SELECT * FROM gamers WHERE email = $1";
    db.query(sql,[email],(err, results)=>{
        if(results.rowCount == 0)
        {
            res.status(400).json({message:'No gamer registered with this email address'})
        }
        else
        {
            emailDetails.from = sender;
            emailDetails.to = results.rows[0].email;
            emailDetails.text = "Good day "+results.rows[0].name+'\n\nAs per request, please find your gametag and password below \nGametag: '+results.rows[0].gametag +'\nPassword: '+results.rows[0].password+'\nUse the credentials to sign in to your account. \n\nGriend\nYour Gamer Friend.';
        
            emailDetails.subject = "Credentials request";

            transporter.sendMail(emailDetails,(emailErr)=>{
                if(emailErr){
                    res.status(400).json(emailErr);
                }else{
                    res.status(200).json({message:'Your password has been sent to your to your email address'})
                }
            });


            
        }

    })





}

exports.updateImage = async (req,res) => {
    const link = req.body.link;
    const gametag = req.params.gametag;

    db.query('UPDATE gamers SET image = $1 WHERE gametag = $2 RETURNING *',[link,gametag],(err,results)=>{
        if(err){
            res.status(400).json({message:err.message});
        }else
        {
            const token = jwt.sign({
                gamer_id: results.rows[0].gamer_id,
                email: results.rows[0].email,
                gametag: results.rows[0].gametag,
                name: results.rows[0].name,
                surname: results.rows[0].surname,
                image: results.rows[0].image 
            },
            process.env.SECRET_KEY,{
                algorithm: 'HS256',
                expiresIn: 120000000
            });
            res.status(200).json({message:'Your profile picture was updated successfully',token:token});
        }

    })

}

exports.updateGamer = async (req, res)=>{
   
    const gametag = req.params.gametag;  

    const {password,name ,surname} = req.body;
    db.query(
      'UPDATE gamers SET password = $1 ,name = $2 ,surname = $3 WHERE gametag = $4 RETURNING *',
        [password ,name ,surname,gametag],
       (error,results) => {
        if (error) {
            res.status(400).json({message:'Query failed'});
        }else {
            const token = jwt.sign({
                gamer_id: results.rows[0].gamer_id,
                email: results.rows[0].email,
                gametag: results.rows[0].gametag,
                name: results.rows[0].name,
                surname: results.rows[0].surname,
                image: results.rows[0].image 
            },
            process.env.SECRET_KEY,{
                algorithm: 'HS256',
                expiresIn: 120000000
            });
            res.status(200).json({message:'Your profile was updated successfully',token: token});
        }
    
      })
}

exports.ChatRequest = (req, res) => {

    const roomId = req.params.roomId;

    io.on('connection', (socket) => {
        console.log('a user connected');
        io.of("/").adapter.on("create-room", (roomId) => {
            console.log(`room ${roomId} was created`);
            socket.join(roomId);

            socket.on('message', (message) => {
                console.log(message);
                io.to(roomId).emit('message',message);
              });
          });

        socket.on('disconnect', () => {
          console.log('a user disconnected!');
        });
      });

}

exports.addFriend = (req, res) => {
    const gametag = req.params.gametag;
    const friendTag = req.body.friendTag
    
    db.query('SELECT * FROM gamers WHERE gametag = $1',[friendTag],(err, results)=>{
        if(results.rows==0){
            res.status(400).json({message:'No user found'})
        }else{
            
            db.query('UPDATE gamers SET friends = array_append(friends, $1) where gametag = $2',[friendTag,gametag],(err, results)=>{
                if(err){
                    console.log(err)
                    res.status(400).json({message:'Query failed'})
                }else{
                    
                    io.on('connection', (socket) => {
                        console.log('a user connected');
                        io.on("create-room", (roomId) => {
                            console.log(`room ${roomId} was created`);
                            socket.join(roomId);
                
                            socket.on('message', (message) => {
                                console.log(message);
                                io.to(roomId).emit('message',message);
                              });
                          });
                
                        socket.on('disconnect', () => {
                          console.log('a user disconnected!');
                        });
                      });
                    res.status(200).json({message:'Friend Added'});
                }
            })
            
        }

        
    });

   

}













 
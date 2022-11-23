const Pool = require('pg').Pool;
const jwt = require("jsonwebtoken");

const db = new Pool({
    user: 'admin',  //Database username
    host: 'localhost',  //Database host
    database: 'griend_db', //Database database
    password: 'admin12345', //Database password
    port: 5433//Database port
  })

const image = '';

exports.register = async (req, res)=>{ 

    const { email , password ,name ,surname , gender, birthday} = req.body;

    const sql = 'SELECT * FROM gamers WHERE email = $1';
    db.query(sql,[email],(err, results)=>{
        if(results.rowCount == 0)
        {
            let number = Math.floor(Math.random()*(2000 - 100) + 100);
            let gametag = name.toLowerCase()+'#'+number;

            console.log(gametag)
            
                db.query(
                    'INSERT INTO gamers (name,surname,email,password,gender,image,birthday,gametag) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',[name,surname,email,password,gender,image,birthday,gametag],
                    (db_err,results) => {
                        if(db_err)
                        {
                            res.status(400).json({message:db_err.message});
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
                                expiresIn: 120
                            });
                            res.status(200).json({message: "Welcome! "+results.rows[0].name,token: token,});
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
                //bcrypt.compare(password,results.rows[0].password,(passErr,result)=> {
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
                                expiresIn: 120
                            });
                            res.status(200).json({message: "Welcome! "+results.rows[0].name,token: token,}); 
                   }
                
                 
                    
                }

        }

    })  
}

exports.searchGamers = (req, res) => {

    const gametag = req.params.gametag;
    const sql = "SELECT * FROM gamers";
    db.query(sql,(err, results)=>{
        if(err) { res.status(400).json({message:'Query failed'}) }else{
            res.status(200).json(results.rows[0]);
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
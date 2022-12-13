const Pool = require('pg').Pool;
const db = new Pool({
    user: 'admin',  //Database username
    host: 'localhost',  //Database host
    database: 'griend_db', //Database database
    password: 'admin12345', //Database password
    port: 5433//Database port
  })

  module.exports = db
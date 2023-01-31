const pg = require('pg')
const db = new pg.Client('postgres://oniuhcik:HVzf57D5a6DVllfAfv1UMAZBvL_0N9oa@hattie.db.elephantsql.com/oniuhcik');;
db.connect(function(err){
  if (err) {
    console.log("Database connection error");
    console.log(err)
  }else
  {
    console.log("Database connected successfully");
  }
})

module.exports = db;

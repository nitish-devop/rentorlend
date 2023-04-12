const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting to mongodb'));

db.once('open',function(){
    console.log('Server connected to '+db.host);
})

module.exports = db;
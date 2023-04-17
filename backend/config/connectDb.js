const mongoose = require('mongoose')
const env =require('dotenv');

module.exports = {
    connectDb : function() {
        const url = process.env.URL
        mongoose.connect(url, {
            useNewUrlParser: true,
            //useFindAndModify: false,
            useUnifiedTopology: true,
        }).catch((err) => {
            console.error(err.message); //Handles initial connection errors
            process.exit(1); // Exit process with failure
        });
        
        const db = mongoose.connection;
        db.on('error', () => {
            console.log('> error occurred from the database');
        });
        db.once('open', () => {
            console.log('> mongoDb Connected');
        });
        
    }
}
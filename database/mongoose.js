const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});


module.exports = 
{
    init:() =>
    {
        useNewUrlParser: true,
        autoIndex: false,
        reconnectInterval: 500,
        reconnectTries: Number.MAX_VALUE,
        poolSize: 5,
        connectTimeoutMS; 10000,
        family: 4;
    }
}
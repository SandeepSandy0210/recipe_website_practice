const mongoose = require('mongoose');
const MONGODBVar = 'mongodb+srv://Admin:0000@onlinerecipebook.ubjspvx.mongodb.net/?retryWrites=true&w=majority';
mongoose
    .connect(MONGODBVar, { 
        useNewUrlParser: true,
        //useCreateIndex: true
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


/**const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});
*/
// Models
require('./Category');
require('./Recipe');
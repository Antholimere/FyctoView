const mongoose = require('mongoose');
const { Schema } = mongoose;

const cryptoSchema = new Schema({
  name: String,
  symbol: String
});

mongoose.model('cryptos', cryptoSchema)

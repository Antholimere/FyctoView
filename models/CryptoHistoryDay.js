const mongoose = require('mongoose');
const { Schema } = mongoose;

const cryptoHistoryDaySchema = new Schema({
  day: Date,
  priceUSD: Number,
  _crypto: { type: Schema.Types.ObjectId, ref: 'Crypto' }
});

mongoose.model('cryptohistoryday', cryptoHistoryDaySchema);

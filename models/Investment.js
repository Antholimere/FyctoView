const mongoose = require('mongoose');
const { Schema } = mongoose;

const investmentSchema = new Schema({
  currency: String,
  symbol: String,
  dollarValue: String,
  date: Date,
  units: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
})

mongoose.model('investment', investmentSchema)

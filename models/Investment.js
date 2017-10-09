const mongoose = require('mongoose');
const { Schema } = mongoose;

const investmentSchema = new Schema({
  currency: String,
  date: Date,
  units: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
})

mongoose.model('investment', investmentSchema)

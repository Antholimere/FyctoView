const request = require('request')
const csv = require('csvtojson')
const mongoose = require('mongoose');

const BitcoinHistoryDay = mongoose.model('bitcoinhistorydays');

csv()
  .fromStream(request.get('https://coinmetrics.io/data/btc.csv'))
  .on('csv', (csvRow)=>{
    new BitcoinHistoryDay({ day: csvRow[0], priceUSD: csvRow[4] }).save();
  })
  .on('done',(error)=>{})

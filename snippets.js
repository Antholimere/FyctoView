const mongoose = require('mongoose');
const Bitcoin = mongoose.model('cryptos');
const request = require('request')
const csv = require('csvtojson')

const currencies = ['btc', 'ltc', 'eth']

const getCurrencies = () => {
  currencies.map((c) => {

    const bitcoin = new Bitcoin({
      name: c,
      priceHistory: []
    }).save().then((x) => {
      let counter = 0;
      csv()
        .fromStream(request.get(`https://coinmetrics.io/data/${c}.csv`))
        .on('csv', (csvRow)=>{
          counter += 1;
          x.priceHistory.push({ day: csvRow[0], priceUSD: csvRow[4] });
          const subdoc = x.priceHistory[0]
          subdoc.isNew
          x.save().then((parent) => { console.log(parent) })
        })
        .on('done',(error)=>{})
    })
  })
}

getCurrencies();

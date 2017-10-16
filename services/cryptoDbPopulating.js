const mongoose = require('mongoose');
const Crypto = mongoose.model('cryptos');
const CryptoHistoryDay = mongoose.model('cryptohistoryday');
const request = require('request')
const csv = require('csvtojson')

const currencies = [['bitcoin', 'btc'], ['litecoin', 'ltc'], ['ethereum', 'eth']]

const getCurrencies = () => {
  currencies.map((c) => {
    const crypto = new Crypto({
      name: c[0],
      symbol: c[1]
    }).save()
  })
}

getCurrencies();

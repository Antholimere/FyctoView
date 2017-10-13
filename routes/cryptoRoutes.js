const mongoose = require('mongoose');
const axios = require('axios');

module.exports = app => {

  app.get('/api/cryptos', async (req, res) => {
    console.log('-------------before coinmarket API -----------------')
    const cryptos = await axios.get('https://api.coinmarketcap.com/v1/ticker/')
    console.log('-------------after coinmarket API -----------------')
    console.log(cryptos.data);
    res.send(cryptos.data);
    res.sendStatus(200);
  })
}

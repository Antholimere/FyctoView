const mongoose = require('mongoose');
const axios = require('axios');

module.exports = app => {
  app.get('/api/cryptos', async (req, res) => {
    const cryptos = await axios.get('https://api.coinmarketcap.com/v1/ticker/')
    res.send(cryptos.data);
    res.sendStatus(200);
  })
}

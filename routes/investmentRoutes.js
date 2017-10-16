const mongoose = require('mongoose');
const Investment = mongoose.model('investment');
const request = require('request')
const csv = require('csvtojson')

module.exports = app => {

  app.get('/api/investments', async (req, res) => {
    const investments = await Investment.find({ _user: req.user.id });

    res.send(investments);
  })

  app.post('/api/investments', async (req, res) => {
    const { currency, units, date } = req.body;
    const findSymbol = (currency) => {
      switch (currency) {
        case 'bitcoin':
          return 'btc'
        case 'ethereum':
          return 'eth'
        case 'litecoin':
          return 'ltc'
        }
    }

    const createInvestment = (date, symbol) => {
      csv()
        .fromStream(request.get(`https://coinmetrics.io/data/${symbol}.csv`))
        .on('csv', (csvRow)=>{
          if (csvRow[0] === date.replace(/-/g, "/")) {
            console.log(csvRow[4])
            const investment = new Investment({
              currency,
              units,
              date,
              symbol: symbol,
              dollarValue: parseInt(csvRow[4], 10),
              _user: req.user.id
            }).save();

            res.sendStatus(200);

          }
        })
        .on('done',(error)=>{})
    }

    createInvestment(date, findSymbol(currency))

  });
}

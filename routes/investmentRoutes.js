const mongoose = require('mongoose');
const Investment = mongoose.model('investment');

module.exports = app => {

  app.get('/api/investments', async (req, res) => {
    const investments = await Investment.find({ _user: req.user.id });

    res.send(investments);
  })

  app.post('/api/investments', async (req, res) => {
    const { currency, units, date } = req.body;

    const investment = new Investment({
      currency,
      units,
      date,
      dollarValue: units * 12.30,
      _user: req.user.id
    });

    console.log(investment)
    await investment.save();
    res.sendStatus(200);
  });
}

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
      _user: req.user.id
    });

    await investment.save();
    res.sendStatus(200);
  });
}

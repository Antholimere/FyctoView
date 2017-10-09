const mongoose = require('mongoose');

module.exports = app => {
  app.post('/api/investments', async (req, res) => {
    const { currency, units, date } = req.body;

    const investment = new Investment({
      currency,
      units,
      date,
      _user: req.user.id
    });

    try {
      await investment.save();
      res.status(200);
    } catch (err) {
      res.status(422).send(err);
    }
  });
}

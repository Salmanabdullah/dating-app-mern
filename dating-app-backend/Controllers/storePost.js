const Cards = require('../models/dbCards');

module.exports = (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard)
    .then((data) => res.status(201).send(data))
    .catch((err) => res.status(500).send(err));
};

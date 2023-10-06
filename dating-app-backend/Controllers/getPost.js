const Cards = require("../models/dbCards");

module.exports = (req, res) => {
  Cards.find()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
};

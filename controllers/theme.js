const db = require('../models');
const Theme = db.theme;

exports.getTheme = (req, res) => {
  const themeName = req.params.themeName;
  if (!req.body.themeName) {
    res.status(400).send({ message: 'Content can nottt be empty!' });
    return;
  }
  Theme.find({ themeName: themeName })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found theme with name: ' + themeName });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving theme with themeName=' + themeName,
        error: err
      });
    });
};
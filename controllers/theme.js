const db = require('../models');
const Theme = db.theme;

exports.getTheme = (req, res) => {
  const themeName = req.params.themeName;
  if (!req.params.themeName) {
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
exports.deleteTheme = async (req, res) => {
  try {
    const themeName = req.params.themeName;
  if (!req.params.themeName) {
    res.status(400).send({ message: 'Content can nottt be empty!' });
    return;
  }
    if (!themeName) {
      res.status(400).send({ message: 'Invalid Theme Name Supplied' });
      return;
    }
    Theme.deleteOne({ themeName: themeName }, function (err, result) {
      if (err) {
        res.status(500).json(err || 'Some error occurred while deleting the contact.');
      } else {
        res.status(204).send(result);
      }
    });
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the contact.');
  }
}; 
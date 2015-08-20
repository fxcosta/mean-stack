// Cada exports funciona como um controller, por enquanto
exports.index = function(req, res) {
    res.render('index');
};

exports.list = function(req, res) {
  res.json({
      band : 'Megadeth',
      genere : 'Thrash Metal'
  })
};
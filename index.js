var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  var apis = {
    apis: [
      {path: '/tmnt', description: 'Teenage Mutant Ninja Turtles'},
      {path: '/shredder', description: 'TMNS main antagonist'}
    ],
  };

  res.render('index', apis);
});

app.get('/tmnt', function(req, res) {
  res.json(
    {
      members: ['Donatello', 'Leonardo', 'Michelangelo', 'Raphael'],
      alignment: 'good',
      villain: '/shredder'
    }
  );
});

app.get('/shredder', function(req, res) {
  res.json(
    {
      affiliations: ['Foot Clan'],
      alignment: 'bad'
    }
  );
});

app.listen(app.get('port'), function() {
  console.log('Node server running on port', app.get('port'));
});

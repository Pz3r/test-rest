var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/tmnt', function(req, res) {
  res.json(
    {
      members: ['Donatello', 'Leonardo', 'Michelangelo', 'Raphael'],
      alignment: 'good'
    }
  );
});

app.listen(app.get('port'), function() {
  console.log('Node server running on port', app.get('port'));
});

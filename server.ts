const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/frontend-projetmean-garcia-mazerand'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/frontend-projetmean-garcia-mazerand/index.html'));});
app.listen(process.env.PORT || 8080);

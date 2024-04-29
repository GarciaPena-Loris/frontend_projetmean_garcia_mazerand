import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
app.use(express.static(__dirname + '/dist/frontend_projetmean_garcia_mazerand/browser'));
app.get('/*', function(req: Request, res: Response) {
  res.sendFile(path.join(__dirname + '/dist/frontend_projetmean_garcia-mazerand/browser/index.html'));
});
app.listen(process.env['PORT'] || 8080);

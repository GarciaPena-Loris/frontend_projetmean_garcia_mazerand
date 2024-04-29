import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
app.use(express.static(__dirname + '/dist/frontend-projetmean-garcia-mazerand'));
app.get('/*', function(req: Request, res: Response) {
  res.sendFile(path.join(__dirname + '/dist/frontend-projetmean-garcia-mazerand/index.html'));
});
app.listen(process.env['PORT'] || 8080);
